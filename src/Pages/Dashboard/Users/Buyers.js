import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Buyers = () => {

    const {data: users =[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('https://mobile-resell-server.vercel.app/user',{
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
        fetch(`https://mobile-resell-server.vercel.app/user/${id}`, {
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

    return (
        <div>
            <h1 className='text-3xl text-center mt-5 font-bold text-green-500'>All buyer</h1>
            <div className="overflow-x-auto">
  <table className="table-auto w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
        users.map((user,i) => <tr key={user._id}>
            <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><button className='btn-xs lg:btn lg:btn-secondary btn-secondary' onClick={()=>handleDeleteUser(user._id)}>Delete</button></td>
        </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Buyers;