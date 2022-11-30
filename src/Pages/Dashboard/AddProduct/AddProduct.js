import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { format } from 'date-fns';



const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const formData = new FormData();
    
    const navigate = useNavigate()

    const {user} = useContext(AuthContext)
    console.log(user)

    // fetch categories
    const {data: categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: async()=>{
            const res = await fetch('https://mobile-resell-server.vercel.app/categories')
            const data= await res.json();
            return data;
        }
    })

    console.log(categories)
    const handleAddProduct = data => {
        const {categories, condition, description, location, number, originalPrice, productName, sellPrice, usedTime} = data;
        
        const image = data.image[0];
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=21faedf05bc7952fab40f5291fa76110`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            console.log(imgData)
            if(imgData.success) {
                console.log(imgData.data.url)
                
                const doctor = {
                    title: productName,
                    location: location,
                    originalPrice: originalPrice,
                    usedTime: usedTime,
                    postTime: format(new Date(), "Pp"),
                    sellerName: user.displayName,
                    sellerStatus: false,
                    condition,
                    phone: number,
                    about: description,
                    category_id: categories,
                    sellPrice: sellPrice,
                    sellerEmail:user.email,
                    img: imgData.data.url
                }

                fetch('https://mobile-resell-server.vercel.app/addproduct', {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    toast.success(`${result.title} insert successfully`)
                    navigate('/dashboard/manageproduct')
                })

            }
        })
        
        // console.log(categories, condition, description, location, number, originalPrice, productName, sellPrice, usedTime);

    }

    return (
        <div>
             <form onSubmit={handleSubmit(handleAddProduct)} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">product name</span>
                        </label>
                        <input type="text" {...register("productName", {
                            required: true
                        })} className="input input-bordered" />
                        
                    </div>
                <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">photo</span></label>
                        <input type="file" {...register("image", {
                            required: "image is Required"
                        })} className="input  w-full max-w-xs" />
                </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">original price</span>
                        </label>
                        <input type="text" {...register("originalPrice", {
                            required: true
                        })} className="input input-bordered" />
                    </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">sell price</span>
                        </label>
                        <input type="text" {...register("sellPrice", {
                            required: true
                        })} className="input input-bordered" />
                    </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">condition type</span>
                        </label>
                        <select {...register("condition")} className="select w-full max-w-xs text-base-content">
                        <option disabled  className="">selected type</option>
                        <option  value="excellent">excellent</option>
                        <option  value="good">good</option>
                        <option  value="fair">fair</option>
                    </select>
                    </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">mobile number</span>
                        </label>
                        <input type="text" {...register("number", {
                            required: true
                        })} className="input input-bordered" />
                    </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">location</span>
                        </label>
                        <input type="text" {...register("location", {
                            required: true
                        })} className="input input-bordered" />
                    </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">product category</span>
                        </label>
                        <select {...register("categories")} className="select w-full max-w-xs text-base-content">
                        <option select disabled  className="">selected categories</option>
                            {
                                categories.map(category =><option 
                                    key={category._id}  
                                    value={category._id}
                                >{category.category_name}</option>
                                    
                                )
                            }
                    </select>
                    </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <input type="text" {...register("description", {
                            required: true
                        })} className="input input-bordered" />
                    </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Used Time</span>
                        </label>
                        <input type="text" {...register("usedTime", {
                            required: true
                        })} className="input input-bordered" />
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="submit" type="submit" />
             </form>
            
        </div>
    );
};

export default AddProduct;