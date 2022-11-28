import { Toaster } from 'react-hot-toast';
import {  RouterProvider } from 'react-router-dom';
import router from './Router/Router';

function App() {
  return (
    <div className="mx-10">
      <RouterProvider router={router}>
    </RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
