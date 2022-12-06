import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Sellers = () => {

    const {data: sellers =[], refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/seller',{
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
            })
            const data= await res.json();
            return data;
        }
    });

    const handleDeleteUser = id => {
        console.log(id)
        fetch(`http://localhost:5000/user/${id}`, {
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
                toast.success(` user deleted successfully`)
            }
        })
    }
        const handleMakeVerify =id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
            toast.success('Make admin successfully')
            refetch();
            }
        })
        }



    return (
        <div>
            <h1 className='text-3xl text-center mt-5 font-bold text-green-500'>All Seller</h1>
            <div className="overflow-x-auto">
  <table className="table-auto lg:table lg:text-2xl Lg:font-bold lg:w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
        {
        sellers?.map((seller,i) => <tr key={seller?._id}>
            <th>{i+1}</th>
        <td>{seller?.name}</td>
        <td>{seller?.email}</td>
        <td>{seller?.role !== 'admin' && <button onClick={()=>handleMakeVerify(seller?._id)} className='btn-sm btn-success'>Make verify</button>}</td>
        <td><button className='btn-sm btn-secondary' onClick={()=>handleDeleteUser(seller?._id)}>Delete</button></td>
        </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Sellers;