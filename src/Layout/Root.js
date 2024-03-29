import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sheard/Footer/Footer';
import Navbar from '../Pages/Sheard/Navbar/Navbar';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;