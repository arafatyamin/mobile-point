
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data: users =[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('https://mobile-resell-server.vercel.app/users',{
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
            <h1 className='text-3xl text-center mt-5 font-bold text-green-500'>All Users</h1>
            <div className="flex items-center justify-center">
            <div className="container">
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead className='text-white'>
                <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                    <th className="p-3 text-left"></th>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Delete</th>
                </tr>
                </thead>
                <tbody className="flex-1 sm:flex-none">
                    {
                    users?.map((user,i) => <tr key={user._id}
                    className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
                    >
                        <th>{i+1}</th>
                    <td className="border-grey-light border hover:bg-gray-100 p-3">{user
                    .name}</td>
                    <td className="border-grey-light border hover:bg-gray-100 p-3">{user.email}</td>
                    <td className="border-grey-light border hover:bg-gray-100 p-3"><button className='btn-sm lg:btn btn-secondary' onClick={()=>handleDeleteUser(user._id)}>Delete</button></td>
                    </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
};

export default AllUsers;