import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const {logout} = useContext(AuthContext);
    const error = useRouteError()
    const handleLogOut=() => {
        logout()
        .then(result => {
            localStorage.removeItem('accessToken')
        })
        .catch(err =>console.log(err))
    }
    return (
        <div className="text-center">
            <p className="text-red-500">something went wrong</p>
            <p className="text-red-400">{error.statusText || error.message}</p>
            <h4 className="text-3xl flex items-center justify-center"> please  <button className="btn-sm btn bg-orange-400" onClick={() =>handleLogOut()}>SignOut</button> 
             and logIn</h4>
        </div>
    );
};

export default DisplayError;