import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Components/ConfirmationModal/ConfirmationModal';
import Loading from '../../Components/Loading/Loading';

const MyOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null)
    const closeModal = () => {
        setDeletingOrder(null);
    }
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/myOrder?email=${user?.email}`;

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
      fetch(`http://localhost:5000/booking/${booking._id}`, {
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
            <div className="overflow-x-auto">
  <table className="table-auto
   lg:table w-full">
        <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product</th>
        <th>email</th>
        <th>price</th>
        <th>status</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      
     {
        bookings.map((booking, i) => <tr key={booking._id}>
            <th>{i+1}</th>
            <td>{booking.buyerName}</td>
            <td>{booking.productName}</td>
            <td>{booking.email}</td>
            <td>${booking.sellPrice}</td>
            <td>
                {
                    booking.sellPrice && !booking.paid && <Link 
                    to={`/dashboard/payment/${booking._id}`} 
                     className='btn sm:btn-xs mr-1  btn-primary'
                    >Pay</Link>
                }
                {
                     booking.paid && <span 
                    className='text-white btn btn-success btn-sm'>
                        paid
                    </span>
                }
                </td>
                <td>
                {
                    !booking.paid && <label 
                    onClick={() => setDeletingOrder(booking)} 
                    htmlFor="confirmation-modal" className="btn sm:btn-xs">delete</label>
                }
                </td>
          </tr>)
     }
      
    </tbody>
  </table>
</div>
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