import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {img, title, category, resalePrice, originalPrice, usedTime, _id} = card;
    return (
        <div className="card  shadow-2xl h-[450px]">
        <figure className="h-[250px] w-full">
            <img src={img} alt="Shoes" className="rounded-xl h-full w-full" />
        </figure>
        <div className="card-body grow-0 gap-px items-center text-center">
            <h2 className="card-title leading-none">{title}</h2>
            <p>{category}</p>
            <p>original price:<span className="line-through">{originalPrice}</span></p>
            <p>resale price:{resalePrice}</p>
            <p>used: {usedTime}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Add Card</button>
            <Link to='/'>
            <button className="btn btn-secondary">Details</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default Card;