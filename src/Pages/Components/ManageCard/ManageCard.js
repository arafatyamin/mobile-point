import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import Loading from '../Loading/Loading';

const ManageCard = ({card, setDeletingProduct, deletingProduct, handleDeleteProduct, closeModal, setAdvertiseProduct, advertiseProduct, handleAdvertiseProduct}) => {
    const {img, title, category, sellPrice, originalPrice, usedTime, postTime, _id} = card;
    const {loading} = useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    
    return (
        <div className="card  shadow-2xl h-[450px]">
        <figure className="h-[250px] w-full">
            <img src={img} alt="Shoes" className="rounded-xl h-full w-full" />
        </figure>
        <div className="card-body grow-0 gap-px items-center text-center">
            <span>{postTime}</span>
            <h2 className="card-title leading-none">{title}</h2>
            <p>{category}</p>
            <p>original price:<span className="line-through">{originalPrice}</span></p>
            <p>resale price:{sellPrice}</p>
            <p>used: {usedTime}</p>
            <div className="card-actions justify-end">
            <label 
            className="btn"
            onClick={() => setAdvertiseProduct(card)} 
            htmlFor="confirmation-modal"
            >advertise</label>
            <label 
            className="btn"
            onClick={() => setDeletingProduct(_id)} 
            htmlFor="confirmation-modal"
            >delete</label>
            </div>
        </div>
        {
                deletingProduct && <ConfirmationModal
                title={`Are you sure you want to delete?`}
                message={`if you delete ${deletingProduct.productName} .It cannot be undone.`}
                successAction={handleDeleteProduct}
                successButtonName= 'Delete'
                modalData = {deletingProduct}
                closeModal = {closeModal}
                ></ConfirmationModal>
            }
        {
                advertiseProduct && <ConfirmationModal
                title={`Are you sure you add advertise section?`}
                message={`if you add ${advertiseProduct.title} .`}
                successAction={handleAdvertiseProduct}
                successButtonName= 'Done'
                modalData = {advertiseProduct}
                closeModal = {closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageCard;