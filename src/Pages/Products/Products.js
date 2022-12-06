import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card/Card';
import ProductModal from '../Components/Modal/ProductModal';


const Products = () => {
    const [product, setProduct] = useState('');
    const products = useLoaderData()

    

    return (
        <div className="grid lg:grid-cols-3 gap-8 m-12 grid-items-center">
            {
                products?.map(card => <Card
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
    );
};

export default Products;