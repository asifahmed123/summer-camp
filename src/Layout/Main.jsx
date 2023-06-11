import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
     return (
          <div className="max-w-[2520] mx-auto px-4 lg:px-20 md:px-10">
               <Navbar></Navbar>
               <div className="pt-20 pb-10">
                    <Outlet></Outlet>
               </div>
               <Footer></Footer>
               <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
               />
          </div>
     );
};

export default Main;