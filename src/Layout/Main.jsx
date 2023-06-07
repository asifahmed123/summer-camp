import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
     return (
          <div>
               <Navbar></Navbar>
               <div className="pt-20 pb-10">
                    <Outlet></Outlet>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default Main;