import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import {  RouterProvider } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';
import Loading from './Pages/Components/Loading/Loading';
import router from './Router/Router';

function App() {
  const {loader} = useContext(AuthContext)
  return (
    <div className="lg:mx-10">
      {
        loader && <Loading></Loading>
      }
      
      <RouterProvider router={router}>
    </RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
