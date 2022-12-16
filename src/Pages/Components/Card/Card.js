import React from 'react';
import { Link } from 'react-router-dom';
import { CgDanger, CgAdd} from 'react-icons/cg';
import { BsImages } from 'react-icons/bs';


const Card = ({card, setProduct}) => {
    const {img, title,_id,postTime} = card;
    return (
            <div className="p-2" >
            <div className="card py-2 m-4 shadow-xl">
            <Link to={`/categories/productDetails/${_id}`} className="">
            <figure className=" ">
            <img src={img} alt={title} className="rounded-xl h-[100px] relative" />
            <Link to='' className="text-lg text-red-500 hover:text-xl absolute top-0 left-0 tooltip" data-tip="wishList"><CgAdd /></Link>
            <Link to="" className="text-lg text-red-500 hover:text-xl absolute top-0 right-0 tooltip tooltip-warning" data-tip="report"><CgDanger /></Link>
            <Link to="" className="text-3xl font-bold text-blue-400 hover:text-4xl absolute top-50 right-50 "><BsImages /></Link>
            </figure>
            <div className="card-body p-0 items-center text-center">
            <h3>{postTime.split(',',1)}</h3>
            <h2 className="card-title">{title}</h2> 
            <div className="card-actions">
                <label 
                htmlFor="productModal"
                onClick={() =>setProduct(card)}
                className="flex items-center btn-sm rounded-lg text-white font-bold bg-[#3a9dd5]">Buy Now</label>
            </div>
            </div>
            </Link>
            </div>
            </div>
    );
};

export default Card;