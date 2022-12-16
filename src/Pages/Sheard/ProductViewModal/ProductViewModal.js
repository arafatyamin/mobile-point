import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductViewModal = () => {
    const product = useLoaderData();
    console.log(product);
    const {img,title, about:details, sellPrice, originalPrice, usedTime, postTime,condition} = product;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 w-1/2 mx-auto">
            <img src={img} alt={title} className="rounded-xl" />
        </figure>
        <h3 className="text-right">{postTime}</h3>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <h4 className="text-2xl">condition: {condition}</h4>
         <h3 className="text-2xl">original Price: {originalPrice}</h3>
            <h3 className="text-2xl">sell Price: {sellPrice}</h3>
         <h3 className="text-2xl">used time: {usedTime}</h3>
            <p>{details}</p>
        </div>
        </div>

    // <div className="">
    //     <h3>{postTime}</h3>
    //     <h3 className="text-lg font-bold">{title}</h3>
    //     <h4 className="text-2xl">condition: {condition}</h4>
    //     <h3 className="text-2xl">original Price: {originalPrice}</h3>
    //     <h3 className="text-2xl">sell Price: {sellPrice}</h3>
    //     <h3 className="text-2xl">used time: {usedTime}</h3>
    //     <p className="py-4">{details}</p>
    // </div>

    );
};

export default ProductViewModal;