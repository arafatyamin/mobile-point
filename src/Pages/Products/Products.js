import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card/Card';
import ProductModal from '../Components/Modal/ProductModal';


const Products = () => {
    const [product, setProduct] = useState('');
    const products = useLoaderData()

    

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                products.map(card => <Card
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