import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
// import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
// import ConfirmationModal from '../../Components/ConfirmationModal/ConfirmationModal';
import Loading from '../../Components/Loading/Loading';

const AllOrders = () => {
    // const [deletingOrder, setDeletingOrder] = useState(null)
    // const closeModal = () => {
    //     setDeletingOrder(null);
    // }
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings/${user?.email}`;

    const {data: bookings = [], isLoading} = useQuery({
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

    // const handleDeleteOrder = booking => {
    //     fetch(`http://localhost:5000/booking/${booking._id}`, {
    //         method: 'DELETE',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           authorization: `bearer ${localStorage.getItem('accessToken')}`
    //       },
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if(data.deletedCount > 0) {
    //             refetch();
    //             toast.success(`Doctor ${booking.name} deleted successfully`)
    //         }
    //     })
    // }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
                <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        bookings?.map((booking, i) => <>
                        {
                          booking.paid ?
                          <tr key={booking._id} booking={booking}>
                          <td>{booking.buyerName}</td>
                          <td>{booking.email}</td>
                        </tr> : ''
                        }
                        
                        </>
                    )
                    }
                  </tbody>
                </table>
              </div>
              {/* {
                deletingOrder && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`if you delete ${deletingOrder.productName} .It cannot be undone.`}
                // successAction={handleDeleteOrder}
                successButtonName= 'Delete'
                modalData = {deletingOrder}
                closeModal = {closeModal}
                ></ConfirmationModal>
            } */}
        </div>
    );
};

export default AllOrders;