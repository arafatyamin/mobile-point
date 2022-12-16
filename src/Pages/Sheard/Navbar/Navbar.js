import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FcSearch } from 'react-icons/fc';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    const [query, setQuery]= useState('')
    console.log(query);
    const handleLogOut=() => {
        logout()
        .then(result => {
            localStorage.removeItem('accessToken')
        })
        .catch(err =>console.log(err))
    }
    // loading all product
    const [allProducts, setAllProducts] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    }, [setAllProducts])

    const menuItems = <React.Fragment>
        <li><Link to='/' className='text-md font-semibold'>HOME</Link></li>
        <li><Link to='/blogs' className='text-md font-semibold'>blogs</Link></li>
        {
                       user?.email?  <>
                       <li><Link to="/dashboard" className="text-md font-semibold">Dashboard</Link></li>
                       <li className="items-center"><Link onClick={handleLogOut} to="/" className="btn-sm btn-secondary text-lg font-semibold hover:bg-white bg-[#01cab8] hover:text-[#01cab8] text-white hover:border-2 hover:border-[#01cab8] rounded-full">LogOut</Link></li>
                       <img data-tip={user?.email} className="w-10 h-10 mx-4 rounded-full tooltip tooltip-bottom" src={user?.photoURL || "https://i.ibb.co/whgZnWG/black-contour-f41038db.jpg"} alt="" />
                       </> : <li className="items-center">
                       <Link to="/login" className="
                       ">LogIn</Link> 
                       </li>
                    }
    </React.Fragment>
    
    return (
        <div>
            <div className="navbar bg-base-100 relative">
                <div className="navbar-start">
                    <div className="dropdown lg:flex lg:flex-row-reverse">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                    </div>
                    <div className="flex">
                    <Link to="/" className=" normal-case lg:text-2xl  font-bold">MobilePoint</Link>
                    </div>

                </div>
                    {/* search form */}
                <form className=" md:h-10 h-8
                 md:w-[100vh] lg:mr-3 flex">
            <input type="text"  onChange={(e)=>setQuery(e.target.value)} placeholder="Search" className="input md:mr-[-4px] h-full w-full bg-gray-200 border-0 rounded-l-lg focus:outline-none"/>
            <div className="h-full relative bg-blue-100 w-20 rounded-r-lg hidden md:block">
            <input type="submit"  value='' className="absolute" />
            < FcSearch className=" absolute w-1/3 h-full top-50 left-5" />
            </div>
            </form>
            
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                    {menuItems}

                    </ul>
                </div>
                {
                user &&
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            }
                </div>
                <div>
                <ul className="list ml-[-10vh] text-center absolute w-full mt-[-10px] z-20">
                {
                    allProducts.filter((product) => product.title.toLowerCase().includes(query)).map(product =>

                        <div key={product._id} className="w-1/4  pl-4 bg-gray-400 m-auto">
                            {
                                query ? <Link to={`/categories/productDetails/${product._id}`} className="link-hover">{product.title}</Link>: ''
                            }
                        </div>
                        )
                }
                
            </ul>
                </div>
        </div>
    );
};

export default Navbar;