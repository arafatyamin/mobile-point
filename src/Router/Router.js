import { createBrowserRouter, Link } from "react-router-dom";
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
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/Users/AllUsers";
import Advertises from "../Pages/Home/AdvertisedItems/Advertises";
import Payment from "../Pages/Dashboard/Payment/Payment";
import DisplayError from "../Pages/Sheard/DisplayError/DisplayError";
import CategoriesLayout from "../Pages/Home/Categories/CategoriesLayout";
import Banner from "../Pages/Home/Banner/Banner";
import ProductViewModal from "../Pages/Sheard/ProductViewModal/ProductViewModal";


const router = createBrowserRouter([
{
        path:'/',
        element:<Home></Home>
},
{
    path:'/',
    element:<Root></Root>,
    errorElement: <DisplayError></DisplayError>,
    children: [
        
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/advertises',
            element:<Advertises></Advertises>
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
    path:'/categories',
    element: <CategoriesLayout></CategoriesLayout>,
    children: [
        {
            path:'/categories',
            element: <Banner></Banner>
        },
        {
            path:'/categories/:id',
            element:<Products></Products>,
            loader:({params}) => fetch(`https://mobile-resell-server.vercel.app/categories/${params.id}`)

        },
        {
            path: '/categories/smartphone',
            element:<AllMobiles></AllMobiles>
        },
        {
            path:'/categories/productDetails/:id',
            element:<ProductViewModal></ProductViewModal>,
            loader: ({params}) => fetch(`https://mobile-resell-server.vercel.app/products/${params.id}`)
        }
    ]
},
{
    path:'/dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement: <DisplayError></DisplayError>,
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
            path:'/dashboard/allUsers',
            element: <AllUsers></AllUsers>, 
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
        {
            path:'/dashboard/payment/:id',
            element: <Payment></Payment>,
            loader: ({params}) => fetch(`https://mobile-resell-server.vercel.app/booking/${params.id}`)
        }
        
    ]
},
{
    path: '*',
    element: <>
    <h2 className="text-4xl text-[#023467] font-bold text-center">404</h2>
    <p className="text-center py-4">Page Not Found, It might have been moved, renamed, or deleted</p>
    <Link to="/" className="flex justify-center text-xl pb-4 text-[#023467]  hover:text-[#175c62] link">return home</Link>
    </>
  }
])

export default router;