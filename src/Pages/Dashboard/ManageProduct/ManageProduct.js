import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Components/Loading/Loading';
import ManageCard from '../../Components/ManageCard/ManageCard';

const ManageProduct = () => {
    const {user} = useContext(AuthContext)
    const [deletingProduct, setDeletingProduct] = useState(null)
    const [advertiseProduct, setAdvertiseProduct] = useState(null)

    const {data: manageProducts = [], loading, refetch} = useQuery({
        queryKey: ['product'],
        queryFn: async()=>{
            const res = await fetch(`https://mobile-resell-server.vercel.app/manage/products/${user.email}`,{
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
            })
            const data = await res.json();
            return data;
        }
    })
    
    const closeModal = () => {
        setDeletingProduct(null);
        setAdvertiseProduct(null);
    }
    const handleDeleteProduct = product => {
        console.log(product)
        fetch(`https://mobile-resell-server.vercel.app/product/${product}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                refetch();
                toast.success(` ${product.name} deleted successfully`)
            }
        })
    }

    const handleAdvertiseProduct = product => {
        const { _id,title,sellPrice,sellerNeme,sellerEmail,category_id,img,about,phone,condition,sellerStatus,postTime,usedTime,originalPrice,location, }= product;

        const advertise = {
            _id,
            title,
            sellPrice,
            sellerNeme,
            sellerEmail,
             phone,
             category_id,
             img,
             productId:_id,
             about,
             location,
             originalPrice,
             usedTime,
             postTime,
             sellerStatus,
             condition,
           }

        fetch(`https://mobile-resell-server.vercel.app/advertise`, {
            method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(advertise)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    if(!result.acknowledged) {
                       return toast.error(`${result.message}`)
                    }
                    toast.success(`${product.title} added successfully`)
                    // navigate('/dashboard/manageproduct')
                })

    }

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="grid grid-col-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                manageProducts.map(manageProduct => <ManageCard 
                    key={manageProduct._id} 
                    card={manageProduct} 
                    setDeletingProduct={setDeletingProduct} 
                    deletingProduct={deletingProduct}
                    handleDeleteProduct={handleDeleteProduct}
                    handleAdvertiseProduct={handleAdvertiseProduct}
                    closeModal={closeModal}
                    advertiseProduct={advertiseProduct}
                    setAdvertiseProduct={setAdvertiseProduct}
                ></ManageCard>)
            }
            </div>
        </div>
    );
};

export default ManageProduct;