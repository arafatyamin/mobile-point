import React from 'react';

const Card = ({card, setProduct}) => {
    const {img, title, category, sellPrice, originalPrice, usedTime,} = card;
    return (
        <div className="card  shadow-2xl h-[450px]">
        <figure className="h-[250px] w-full">
            <img src={img} alt="Shoes" className="rounded-xl h-full w-full" />
        </figure>
        <div className="card-body grow-0 gap-px items-center text-center">
            <h2 className="card-title leading-none">{title}</h2>
            <p>{category}</p>
            <p>original price:<span className="line-through">{originalPrice}</span></p>
            <p>resale price:{sellPrice}</p>
            <p>used: {usedTime}</p>
            <div className="card-actions justify-end">

            <label htmlFor="productModal" 
            className="btn"
            onClick={() => setProduct(card)}
            >booking</label>

            
            </div>
        </div>
        </div>
    );
};

export default Card;