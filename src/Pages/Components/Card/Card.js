import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card, setProduct}) => {
    console.log(card);
    const {img, title,  about, sellPrice, originalPrice, usedTime, postTime} = card;
    return (
<div className="pb-12">
            <div className="">
                <div  className="card bg-white rounded-3xl shadow-xl">
                        
                        <div className="card-body items-center text-[#175c62]  text-center">
                        <img src={img}  alt={title} className="w-2/6" />
                        <span className="text-end">{postTime}</span>
                            <h2 className="card-title">{title}</h2>
                            <p>original price:<span className="line-through">{originalPrice}</span></p>
                            <h2 className="card-title">resale price:{sellPrice}</h2>
                            
                            <p>used: {usedTime}</p>
                            <p>{about.slice(0, 100)}</p>
                            <div className="card-actions justify-end">

                                <label 
                                    className="btn hover:bg-white bg-[#01cab8] hover:text-[#01cab8] text-white hover:border-2 hover:border-[#01cab8] rounded-full"
                                    >WishList</label>
                                    <label htmlFor="productModal" 
                                    className="btn hover:bg-white bg-[#01cab8] hover:text-[#01cab8] text-white hover:border-2 hover:border-[#01cab8] rounded-full"
                                    onClick={() => setProduct(card)}
                                    >booking</label>
                                    </div>
                                    <div>
                                        <Link to="" className="text-lg text-red-500 hover:text-xl">report product</Link>
                                    </div>
                        </div>
                    </div>
            </div>
            
            </div>
        

        // <div className="card  shadow-2xl h-[450px]">
        // <figure className="h-[250px] w-full">
        //     <img src={img} alt="Shoes" className="rounded-xl h-full w-full" />
        // </figure>
        // <div className="card-body grow-0 gap-px items-center text-center">
        //     <span>{postTime}</span>
        //     <h2 className="card-title leading-none">{title}</h2>
        //     <p>{category}</p>
        //     <p>original price:<span className="line-through">{originalPrice}</span></p>
        //     <p>resale price:{sellPrice}</p>
        //     <p>used: {usedTime}</p>
        //     
        // </div>
        // </div>
    );
};

export default Card;