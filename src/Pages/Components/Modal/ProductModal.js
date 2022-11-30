import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const ProductModal = ({product,setProduct}) => {
    console.log(product);
  const { title, sellPrice, _id, sellerName, sellerEmail
  } = product;
  const {user} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/dashboard';
  

const handlePurchase =event =>{
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;

const buying = {
 productName,
 sellPrice,
 buyerName:name,
  email,
  phone,
  address,
  sellerName,
  sellerEmail,
  productId:_id,
  bookingTime: format(new Date(), "Pp"),
}

fetch('http://localhost:5000/booking', {
  method: 'POST',
  headers:{
    'content-type': 'application/json'
  },
  body: JSON.stringify(buying)
})
.then(res => res.json())
.then(data =>{
  console.log(data)
 if(data.acknowledged){
   toast.success('confirm successfully')
  setProduct('')
 }
 if(!data.acknowledged){
   toast.error(data.message)
   
 }
 
})
    
navigate(from, { replace: true }); 
    
}

  return (
    <>
      <input type="checkbox" id="productModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="productModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form onSubmit={handlePurchase }>
          <input 
          name="productName"
          value={title}
          disabled
          className="input input-bordered input-info w-full  mt-3 text-lg font-bold" />
          <input
              type="text"
              name="price"
              value={sellPrice}
              disabled
              className="input input-bordered input-info w-full  mt-3"
            />
            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              name="name"
              placeholder="Your Name"
              className="input input-bordered input-info w-full  mt-3"
            />
            <input
              type="email"
              defaultValue={user?.email}
              disabled
              name="email"
              placeholder="Email"
              className="input input-bordered input-info w-full  mt-3"
            />
             <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered input-info w-full  mt-3"
              required
            />
             <input
              type="text"
              name="address"
              placeholder="your address"
              className="input input-bordered input-info w-full  mt-3"
              required
            />
            <input
              type="submit"
              className="input w-full  mt-5 btn btn-success"
              value="Submit" 
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductModal;