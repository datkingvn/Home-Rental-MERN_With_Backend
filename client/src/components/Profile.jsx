import React, {useContext} from 'react';
import {CiSettings, CiShoppingBasket} from "react-icons/ci";
import {IoIosLogOut} from "react-icons/io";
import {HiMiniUserCircle} from "react-icons/hi2";
import {AuthContext} from "../contexts/AuthProvider.jsx";

const Profile = ({user}) => {
    const {logOut} = useContext(AuthContext);
    const handleLogout = async () => {
        try {
            await logOut();
            alert("Đăng xuất thành công");
        } catch (error) {
            // Handle error
            console.log(error);
        }
    };
    return (
        <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ml-4">
                    <div className="w-10 rounded-full">
                        {
                            user.photoURL ? <img alt="Avatar User" src={user.photoURL} /> : <img alt="Avatar User" src="https://s2.bunnycdn.ru/assets/avatars/Pokemon/012.jpg" />
                        }
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li><a href='/update-profile'><HiMiniUserCircle style={{fontSize: "17px"}}/> Profile <span className="badge">New</span></a></li>
                    <li><a><CiShoppingBasket style={{fontSize: "17px"}}/> Order</a></li>
                    <li><a><CiSettings style={{fontSize: "17px"}}/> Settings</a></li>
                    <li><a onClick={handleLogout}><IoIosLogOut style={{fontSize: "17px"}}/> Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
