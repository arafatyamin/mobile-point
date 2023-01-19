import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Sheard/Footer/Footer';
import Navbar from '../../Sheard/Navbar/Navbar';
import Categories from './Categories';

const CategoriesLayout = () => {
    return (
        <div className="w-full">
            <Navbar></Navbar>
            <div className="lg:flex">
            <div className="w-full lg:w-1/5 lg:py-4 bg-gray-200 shadow-xl rounded-lg h-full" >
            <Categories></Categories>
            </div>
            <div className="w-full rounded-lg h-full
                ">
            <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default CategoriesLayout;