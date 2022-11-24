import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AllMobiles from "../Pages/Categories/AllMobiles/AllMobiles";
import Blogs from "../Pages/Home/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
{
    path:'/',
    element:<Root></Root>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allmobiles',
            element:<AllMobiles></AllMobiles>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
    ]
}
])

export default router;