import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {AuthContext} from "../../contexts/AuthProvider.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {CiLogin} from "react-icons/ci";

const UpdateProfile = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    // Redirect to Home Page or Specific page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    const {updateUserProfile} = useContext(AuthContext);
    const onSubmit = (data) => {
        const name = data.name;
        const photoURL = data.photoURL;

        updateUserProfile({name, photoURL})
            .then(() => {
                navigate(from, {replace: true});
                window.location.reload(); // Reload trang
            })
            .catch((error) => {
                // An error happened.
            });
    };

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex items-center justify-center'>
                        <CiLogin style={{fontSize: "20px"}}/>
                        <p className='font-semibold text-lg ml-2'>THAY ĐỔI <span
                            className='text-green'>AVATAR</span></p>
                        <img src="/images/gif/meo_dap_ban.gif" alt="logo"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tên</span>
                        </label>
                        <input type="text" placeholder="Nhập tên của bạn..."
                               className="input input-bordered" {...register("name")} required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Upload Avatar</span>
                        </label>
                        <input type="text" placeholder="photoURL"
                               className="input input-bordered" {...register("photoURL")} required/>

                        {/*Upload Image make when done backend*/}
                        {/*<input type="file" className="file-input file-input-bordered w-full max-w-xs" />*/}

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-green text-white uppercase">Cập nhật</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
