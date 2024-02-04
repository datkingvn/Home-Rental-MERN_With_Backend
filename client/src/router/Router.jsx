import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main.jsx";
import Home from "../pages/home/Home.jsx";
import Menu from "../pages/shop/Menu.jsx";
import Signup from "../components/Signup.jsx";
import PrivateRouter from "../PrivateRouter/PrivateRouter.jsx";
import UpdateProfile from "../pages/UserSettings/UpdateProfile.jsx";
import CartPage from "../pages/shop/CartPage.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/menu",
                element: <Menu/>
            },
            {
                path: "/update-profile",
                element: <PrivateRouter><UpdateProfile/></PrivateRouter>
            },
            {
                path: "/cart-page",
                element: <CartPage/>
            },
        ],
    },
    {
        path: "/signup",
        element: <Signup/>
    }
  ]);

export default router;