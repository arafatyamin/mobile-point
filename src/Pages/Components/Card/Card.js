import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card, setProduct}) => {
    console.log(card);
    const {img, title,  about, sellPrice, originalPrice, usedTime, postTime} = card;
    return (
<div className="pb-12">
            <div className="">
                <div  className="card h-screen bg-white rounded-3xl shadow-xl">
                        
                        <div className="card-body items-center text-[#2456c2]  text-center">
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
    );
};

export default Card;