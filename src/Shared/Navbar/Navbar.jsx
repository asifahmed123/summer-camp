import { NavLink } from "react-router-dom";
import useAuth from "../../Hocks/useAuth";
import DarkMode from "../../components/DarkMode";

const Navbar = () => {
     const { user, logOut } = useAuth();
     const navItem = <>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/instructors'>Instructors</NavLink></li>
          <li><NavLink to='/classes'>Classes</NavLink></li>
          {
               user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
          }
          <li><DarkMode></DarkMode></li>
     </>
     const handleLogOut = () => {
          logOut()
     }

     return (
          <>
               <div className="navbar bg-[--nav-bg]">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                   {navItem}
                              </ul>
                         </div>
                         <img className="hidden md:block" src="https://img.freepik.com/free-vector/flat-design-track-field-logo_52683-78010.jpg?w=740&t=st=1686155359~exp=1686155959~hmac=c04fa260ac090cec09cbfb1340a7197e046ba97f5bae91a1fb99f22a66685743" width={80} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {navItem}
                         </ul>
                    </div>
                    <div className="navbar-end">
                         <div className="dropdown dropdown-end flex justify-center items-center">
                              {user ?
                                   <>
                                        <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                             <div className="w-10 rounded-full">
                                                  <img src={user?.photoURL} />
                                             </div>
                                        </label>
                                   </> :
                                   <>
                                        <NavLink to='/login'><button className="btn btn-ghost">Login</button></NavLink>

                                   </>
                              }
                         </div>

                    </div>
               </div>
          </>
     );
};

export default Navbar;