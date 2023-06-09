import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
     return (
          <div className="max-w-[2520] mx-auto px-4 lg:px-20 md:px-10">
               <Navbar></Navbar>
               <div className="pt-20 pb-10">
                    <Outlet></Outlet>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default Main;