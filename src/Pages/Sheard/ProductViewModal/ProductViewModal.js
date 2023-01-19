import React from 'react';
import { CgAdd, CgDanger } from 'react-icons/cg';
import { Link, useLoaderData } from 'react-router-dom';

const ProductViewModal = () => {
    const product = useLoaderData();
    console.log(product);
    const {img,title, about:details, sellPrice, originalPrice, usedTime, postTime,condition} = product;
    return (
        <div className="card w-[90%] lg:w-[500px] mx-auto bg-base-100 my-6
        
        ">

<div className='flex flex-col justify-center items-center rounded-b-full bg-gray-400 w-8 md:w-10 lg:w-12 gap-4 mt-4 fixed top-[50%] z-0 left-[30%]'
        >
        <Link to='' className="pt-2 text-2xl text-red-500 hover:text-blue-400 tooltip" data-tip="wishList"><CgAdd /></Link>
            <Link to="" className="pb-2 text-2xl text-red-500 hover:text-blue-400 tooltip tooltip-warning" data-tip="report"><CgDanger /></Link>
        </div>
        <figure className="px-10 pt-10 lg:w-3/4 h-full mx-auto">
            <img src={img} alt={title} className="rounded-xl" />
        </figure>
        


<table class="table-auto table-zebra w-full mx-auto text-xl my-4">
  <tbody>
    <tr>
      <td>Post Time</td>
      <td>{postTime}</td>
    </tr>
    <tr>
      <td>Name</td>
      <td>{title}</td>
    </tr>
    <tr>
      <td>Price</td>
      <td>{originalPrice}</td>
    </tr>
    <tr>
      <td>Used Time</td>
      <td>{usedTime}</td>
    </tr>
  </tbody>
</table>
        </div>
    );
};

export default ProductViewModal;