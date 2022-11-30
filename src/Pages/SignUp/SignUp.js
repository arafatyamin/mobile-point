import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../Components/Loading/Loading';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, loading } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    const formData = new FormData();


    if(token) {
        return navigate('/')
    }

    
    

    const handleSignUp = (data) => {
        setSignUPError('');
        console.log(data);
        const image = data.image[0];
        
        

            // update imagebb
            formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            console.log(imgData)
            if(imgData.success) {

                createUser(data.email, data.password)
            .then(result => {
                updateUserProfile(data.name, imgData.data.url)
                .then(result =>{
                    saveUser(data.email)
                    toast.success('User Created Successfully.')
                })
                
                
                
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
               
                
                
                const user = {
                    name: data.name,
                    email: data.email,
                    role: data.role,
                    image: imgData.data.url,
                }
                

                const saveUser = ( email) =>{
                fetch('https://mobile-resell-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data =>{ 
                    console.log(data)
                    setCreatedUserEmail(email)
                })
            }
            }
        })

    }

    
    if(loading){
        return <Loading></Loading>
    }
   
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    
    <div className="card p-4 w-full max-w-sm shadow-2xl bg-base-100">
    <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                    <select {...register("role")} className="select w-full max-w-xs text-base-content">
                        <option value='user'>user</option>
                        <option  value="seller">seller</option>
                    </select>
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">image</span></label>
                        <input type="file"  {...register("image", {
                            required: "img is required",
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    <div className='text-center'>
                    <Link to='/login'>have a account <span className='text-lg link text-blue-700'>logIn</span></Link>
                    </div>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
        
    </div>
  </div>
</div>
    );
};

export default SignUp;