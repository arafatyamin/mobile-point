import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Card from '../../Components/Card/Card';

const ManageProduct = () => {
    const {user} = useContext(AuthContext)

    const {data: manageProducts = []} = useQuery({
        queryKey: ['product'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/manage/products/${user.email}`)
            const data = await res.json();
            return data;
        }
    })
    console.log(manageProducts);
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
            {
                manageProducts.map(manageProduct => <Card key={manageProduct._id} card={manageProduct}></Card>)
            }
            </div>
        </div>
    );
};

export default ManageProduct;