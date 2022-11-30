
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const {data: users =[], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/users',{
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
            })
            const data= await res.json();
            return data;
        }
    });
        
        refetch();
    return (
        <div>
            <div>
            <h1 className='text-3xl text-center mt-5 font-bold text-green-500'>All Users</h1>
            <div className="overflow-x-auto">
            <table className="table w-full">
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
                    <td><button className='btn btn-secondary'>Delete</button></td>
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