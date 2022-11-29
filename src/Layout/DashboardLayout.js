import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Navbar from '../Pages/Sheard/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                    <li><Link to="/dashboard">My Orders</Link></li>
                        {
                            isSeller && <>
                            <li><Link to="/dashboard/allorders">Buyer Order</Link></li>
                        <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                        <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>
                            </>
                        }

                        <div className="dropdown dropdown-hover">
                        {
                                isAdmin && <>
                                <li tabIndex={0}><Link to="/dashboard/allUsers">Users</Link></li>
                        
                            
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52 z-20">
                            <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                            <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                            </ul>
                                </>
                            }
                        
                                
                            
                        
                        </div>
                        

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;