import React from 'react';
import { Link } from 'react-router-dom';
import { CgDanger, CgAdd} from 'react-icons/cg';
import { BsImages } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';


const Card = ({card, setProduct}) => {
    const {user}= useContext(AuthContext);
    const {img, title,_id,postTime,sellPrice,originalPrice} = card;


    return (
            <div className="card w-full my-3 md:w-[250px] h-[380px]  gap-4 hover:shadow-xl">
            <Link to={`/categories/productDetails/${_id}`} className="">
            <figure className=" ">
            <img src={img} alt={title} className="rounded-xl h-[192px] pt-4 relative" />
            
            {/* <Link to="" className="text-3xl font-bold text-blue-400  absolute top-50 right-50 "><BsImages /></Link> */}
            </figure>
            <div className="card-body pl-5">
            
            <h2 className="card-title">{title.slice(0,20)}</h2> 
            <p className="line-through">price: ${originalPrice}</p>
            <div className="flex">
            <p className="">price: ${sellPrice}</p>
            <h3 className="">{postTime.split(',',1)}</h3>
            </div>
                {/* {
                    user?<label 
                    htmlFor="productModal"
                    onClick={() =>setProduct(card)}
                    className="flex items-center rounded-lg text-gray-600 link-hover font-bold">buy now</label>:
                    <Link to="/login" className='link link-info text-xl mb-10'>logIn</Link>
                } */}
            </div>
            </Link>
            </div>
    );
};

export default Card;