import React, {useContext, useState} from 'react';
import {CiLogin} from "react-icons/ci";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {FaFacebook, FaGithub} from "react-icons/fa";
import {useForm} from "react-hook-form";
import {AuthContext} from "../contexts/AuthProvider.jsx";

const AuthenticationModal = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const {signUpWithGmail, login} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("")

    // Redirect to Home Page or Specific page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    // Google Login
    const handleLoginGoogle = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            document.getElementById('my_modal_5').close();
            navigate(from, {replace: true});
        }).catch((error) => {
            console.log(error);
        });
    }
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        login(email, password).then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            document.getElementById('my_modal_5').close();
            navigate(from, {replace: true});
        }).catch((error) => {
            const errorMessage = error.message;
            setErrorMessage("Vui lòng cung cấp đúng Email / Mật khẩu");
        });
    };

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
                <div className="modal-box flex flex-col mt-0">

                    <div className="modal-action mt-0 flex flex-col justify-center">
                        <form className="card-body" method='dialog' onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex items-center justify-center'>
                                <CiLogin style={{fontSize: "20px"}}/>
                                <p className='font-semibold text-lg ml-2'><span
                                    className='text-green'>DatFood</span> xin chào!</p>
                                <img src="/images/gif/tho_con.gif" alt="logo"/>
                            </div>

                            {/*Email*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email (*)</span>
                                </label>
                                <input type="email" placeholder="Email"
                                       className="input input-bordered" {...register("email")} />
                            </div>

                            {/*Password*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password (*)</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered"
                                       {...register("password")} />
                                <label className="label mt-1">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            {/*Message Error*/}
                            {
                                errorMessage ? <p className='text-red text-xs italic'><span>Thông báo:</span> {errorMessage}</p> : ""
                            }

                            {/*Button*/}
                            <div className="form-control mt-4">
                                <input type='submit' value='Đăng Nhập' className="btn bg-green uppercase text-white">
                                </input>
                            </div>

                            <p className='text-center my-2 '>Chưa có tài khoản? <Link
                                className='text-red ml-1 underline' to='/signup'>Đăng ký ngay</Link>
                            </p>

                            {/*Close Button*/}
                            <button
                                htmlFor='my_modal_5'
                                onClick={() => document.getElementById('my_modal_5').close()}
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>

                        {/*Social Media Login*/}
                        <div className='flex justify-center items-center gap-4 pb-3'>
                            <button className="btn btn-circle hover:bg-green hover:text-white"
                                    onClick={handleLoginGoogle}>
                                <FcGoogle style={{fontSize: "25px"}}/>
                            </button>
                            <button className="btn btn-circle hover:bg-green hover:text-white">
                                <FaFacebook style={{fontSize: "25px"}}/>
                            </button>
                            <button className="btn btn-circle hover:bg-green hover:text-white">
                                <FaGithub style={{fontSize: "25px"}}/>
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AuthenticationModal;
