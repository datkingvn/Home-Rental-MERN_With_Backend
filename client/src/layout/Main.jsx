import React, {useContext} from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {AuthContext} from "../contexts/AuthProvider.jsx";
import LoadingWebsite from "../components/LoadingWebsite.jsx";


const Main = () => {
    const {loading} = useContext(AuthContext);
    return (
        <div>
            {
                loading ? <LoadingWebsite/> :
                    <div>
                        <Navbar/>
                        <div className='min-h-screen'>
                            <Outlet/>
                        </div>
                        <Footer/>
                    </div>
            }
        </div>
    );
};

export default Main;
