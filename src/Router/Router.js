import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Root from "../Layout/Root";
import AllMobiles from "../Pages/Categories/AllMobiles/AllMobiles";
import Buyers from "../Pages/Dashboard/Users/Buyers";
import AllOrders from "../Pages/Dashboard/AllOrders/AllOrders";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Sellers from "../Pages/Dashboard/Users/Sellers";
import Blogs from "../Pages/Home/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import SignUp from "../Pages/SignUp/SignUp";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import ManageProduct from "../Pages/Dashboard/ManageProduct/ManageProduct";


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
            path:'/categories/:id',
            element:<Products></Products>,
            loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`)

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
},
{
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children: [
        {
            path:'/dashboard',
            element: <MyOrders></MyOrders>, 
        },
        {
            path:'/dashboard/allorders',
            element: <AllOrders></AllOrders>, 
        },
        {
            path:'/dashboard/allsellers',
            element: <Sellers></Sellers>, 
        },
        {
            path:'/dashboard/allbuyers',
            element: <Buyers></Buyers>, 
        },
        {
            path:'/dashboard/addproduct',
            element: <AddProduct></AddProduct>, 
        },
        {
            path:'/dashboard/manageproduct',
            element: <ManageProduct></ManageProduct>, 
        },
        
    ]
}
])

export default router;