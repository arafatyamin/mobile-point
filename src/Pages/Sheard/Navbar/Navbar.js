import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    const handleLogOut=() => {
        logout()
        .then(result => {
            localStorage.removeItem('accessToken')
        })
        .catch(err =>console.log(err))
    }

    const menuItems = <React.Fragment>
        <li><Link to='/' className='text-md font-semibold'>HOME</Link></li>
        <li><Link to='/blogs' className='text-md font-semibold'>blogs</Link></li>
        {
                       user?.email?  <>
                       <li><Link to="/dashboard" className="text-md font-semibold">Dashboard</Link></li>
                       <li><Link onClick={handleLogOut} to="/" className="btn-sm btn-secondary text-lg font-semibold">LogOut</Link></li>
                       </> :<Link to="/login" className="btn-sm btn-secondary text-lg font-semibold
                       ">LogIn</Link> 
                    }
    </React.Fragment>
    return (
        <div>
            <div className="navbar bg-base-100">
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
                <p>{user?.email}</p>
                <p>{user?.displayName}</p>
                    </div>

                </div>
                <form className=" h-9  lg:mr-3 flex">
            <input type="text" placeholder="Search" className="input h-full w-full border-2 bg-gray-200 p-6 rounded-l-full"/>
            <input type="submit" value="ok" className="btn h-full p-2 rounded-r-full" />
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
        </div>
    );
};

export default Navbar;