import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import Loading from '../../Components/Loading/Loading';
import ProductModal from '../../Components/Modal/ProductModal';

const AllMobiles = () => {
    const [allMobiles, setAllMobiles] = useState([])
    const [product, setProduct] = useState('');
    useEffect(() =>{
        fetch('https://mobile-resell-server.vercel.app/products')
        .then(res => res.json())
        .then(data =>
            setAllMobiles(data)
        )
    }, [setAllMobiles])
    return (
        <div>
            <h2 className="text-4xl text-center">All Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
            {
                allMobiles.map(card => <Card
                key={card._id}
                card={card}
                setProduct={setProduct}
                ></Card>)

            }
            <div>
            <ProductModal 
            product={product}
            setProduct={setProduct}
            ></ProductModal>
            </div>
        </div>
        </div>
    );
};

export default AllMobiles;