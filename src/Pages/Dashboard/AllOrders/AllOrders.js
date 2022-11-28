import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const AllOrders = () => {

    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () =>{
            const res = await fetch(url, {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
            });
            const data = await res.json();
            return data;
        }
    })

    console.log(bookings)

    return (
        <div>
            
        </div>
    );
};

export default AllOrders;