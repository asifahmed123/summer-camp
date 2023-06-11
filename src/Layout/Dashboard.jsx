import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import useAdmin from "../Hocks/useAdmin";
import useInstructor from "../Hocks/useInstructor";


const Dashboard = () => {

     const [isAdmin] = useAdmin();
     const [isInstructor] = useInstructor();

     return (
          <>
               <Navbar></Navbar>
               <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                         <Outlet></Outlet>
                         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                         <ul className="menu p-4 w-80 h-full font-semibold bg-blue-100">
                              {
                                   isInstructor &&
                                   <>
                                        <li><NavLink to='/dashboard/addclass'>Add a Class</NavLink></li>
                                        <li><NavLink to='/dashboard/instructorclasses'>My Classes</NavLink></li>
                                   </>
                              }
                              {
                                   isAdmin &&
                                   <>
                                        <li><NavLink to='/dashboard/manageusers'>Manage Users</NavLink></li>
                                        <li><NavLink to='/dashboard/manageclasses'>Manage Classes</NavLink></li>
                                   </>
                              }
                              {
                                   !isAdmin && !isInstructor &&
                                   <>
                                        <li><NavLink to='/dashboard/studentclasses'>My Selected Classes</NavLink></li>
                                        <li><NavLink to='/dashboard/enrolledclasses'>My Enrolled Classes</NavLink></li>
                                        <li><NavLink to='/dashboard/paymenthistory'>Payment History</NavLink></li>
                                   </>

                              }
                              <div className="divider"></div>
                              <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                         </ul>

                    </div>
               </div>
               <Footer></Footer>
          </>
     );
};

export default Dashboard;