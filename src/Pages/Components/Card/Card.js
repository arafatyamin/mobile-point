import React from 'react';
import { Link } from 'react-router-dom';
import { CgDanger, CgAdd} from 'react-icons/cg';
import { BsImages } from 'react-icons/bs';


const Card = ({card, setProduct}) => {
    const {img, title,_id,postTime,sellPrice,originalPrice} = card;
    return (
            <div className="card  my-10 w-[250px] h-[350px] gap-4 hover:shadow-xl">
            <Link to={`/categories/productDetails/${_id}`} className="">
            <figure className=" ">
            <img src={img} alt={title} className="rounded-xl h-[192px] pt-4 relative" />
            <Link to='' className="text-lg text-red-500 hover:text-xl absolute top-2 left-2 tooltip" data-tip="wishList"><CgAdd /></Link>
            <Link to="" className="text-lg text-red-500 hover:text-xl absolute top-2 right-2 tooltip tooltip-warning" data-tip="report"><CgDanger /></Link>
            <Link to="" className="text-3xl font-bold text-blue-400 hover:text-4xl absolute top-50 right-50 "><BsImages /></Link>
            </figure>
            <div className="card-body p-0 items-center text-center">
            <h3>{postTime.split(',',1)}</h3>
            <h2 className="card-title">{title.slice(0,20)}</h2> 
            <p className="line-through">price: ${originalPrice}</p>
            <p className="">price: ${sellPrice}</p>
                <label 
                htmlFor="productModal"
                onClick={() =>setProduct(card)}
                className="flex items-center rounded-lg text-gray-600 link-hover font-bold">view details</label>
            </div>
            </Link>
            </div>
    );
};

export default Card;