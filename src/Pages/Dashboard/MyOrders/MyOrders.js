import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Components/ConfirmationModal/ConfirmationModal';
import Loading from '../../Components/Loading/Loading';
import  './MyOrders.css';

const MyOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null)
    const closeModal = () => {
        setDeletingOrder(null);
    }
    const {user} = useContext(AuthContext);

    const url = `https://mobile-resell-server.vercel.app/myOrder?email=${user?.email}`;

    const {data: bookings = [], isLoading, refetch} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () =>{
            const res = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
            });
            const data = await res.json();
            return data;
        }
    })


    const handleDeleteOrder = booking => {
      fetch(`https://mobile-resell-server.vercel.app/booking/${booking._id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if(data.deletedCount > 0) {
              refetch();
              toast.success(`Doctor ${booking.name} deleted successfully`)
          }
      })
  }
  console.log(bookings);
  if(isLoading){
      return <Loading></Loading>
  }

    return (
        <div>
        <h1>My Products</h1>
        
     {
        bookings.map((booking, i) =>
        <div key={booking._id} className="flex items-center justify-center">
            
            <div className="container">
  <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
        <thead className='text-white'>
      <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
        <th className="p-3 text-left"></th>
        <th className="p-3 text-left">Name</th>
        <th className="p-3 text-left">Product</th>
        <th className="p-3 text-left">email</th>
        <th className="p-3 text-left">price</th>
        <th className="p-3 text-left">status</th>
        <th className="p-3 text-left">action</th>
      </tr>
    </thead>
    <tbody className="flex-1 sm:flex-none">
        <tr 
        className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
        >
            <td className="border-grey-light border hover:bg-gray-100 p-3">{i+1}</td>
            <td className="border-grey-light border hover:bg-gray-100 p-3">{booking.buyerName}</td>
            <td className="border-grey-light border hover:bg-gray-100 p-3">{booking.productName}</td>
            <td className="border-grey-light border hover:bg-gray-100 p-3">{booking.email}</td>
            <td className="border-grey-light border hover:bg-gray-100 p-3">${booking.sellPrice}</td>
            <td className="border-grey-light border hover:bg-gray-100 p-3">
                {
                    booking.sellPrice && !booking.paid && <Link 
                    to={`/dashboard/payment/${booking._id}`} 
                     className='lg:btn btn-sm mr-1  btn-primary'
                    >Pay</Link>
                }
                {
                     booking.paid && <span 
                    className='lg:btn text-white btn-success btn-sm'>
                        paid
                    </span>
                }
                
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3">
            {
                    !booking.paid && <label 
                    onClick={() => setDeletingOrder(booking)} 
                    htmlFor="confirmation-modal" className="lg:btn btn-warning btn-sm">delete</label>
                }
            </td>
          </tr>
          
    </tbody>
  </table>
</div>
</div>)
     }
      
{
                deletingOrder && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`if you delete ${deletingOrder.productName} .It cannot be undone.`}
                successAction={handleDeleteOrder}
                successButtonName= 'Delete'
                modalData = {deletingOrder}
                closeModal = {closeModal}
                ></ConfirmationModal>
            } 
        
        </div>
    );
};

export default MyOrders;