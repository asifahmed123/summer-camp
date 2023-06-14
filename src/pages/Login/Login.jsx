import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hocks/useAuth";
import Swal from "sweetalert2";


const Login = () => {
     const { loginUser, googleSignIn } = useAuth()
     const [toggle, setToggle] = useState(false);
     const [error, setError] = useState('');
     console.log(error);
     const { register, handleSubmit, formState: { errors } } = useForm();

     const location = useLocation();
     const navigate = useNavigate();

     const from = location.state?.from?.pathname || "/";

     const onSubmit = data => {
          console.log(data)
          loginUser(data.email, data.password)
               .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    Swal.fire({
                         title: 'Login successful...',
                         showClass: {
                              popup: 'animate__animated animate__fadeInDown'
                         },
                         hideClass: {
                              popup: 'animate__animated animate__fadeOutUp'
                         }
                    })
                    navigate(from, { replace: true });
               })
               .then(error => {
                    // console.log(error.message);
                    setError(error.message)
               })
     };

     const handleGoogleSignIn = () => {
          googleSignIn()
               .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    const savedUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL }
                    fetch('https://assignment-12-server-two-xi.vercel.app/users', {
                         method: 'POST',
                         headers: {
                              'content-type': 'application/json'
                         },
                         body: JSON.stringify(savedUser)
                    })
                         .then(res => res.json())
                         .then(data => {
                              console.log(data);
                         })
                    Swal.fire({
                         position: 'top-end',
                         icon: 'success',
                         title: 'sign up successful',
                         showConfirmButton: false,
                         timer: 1500
                    })
                    navigate(from, { replace: true })
               })
               .then(error => {
                    console.log(error.message);
               })
     }

     return (
          <div className="hero min-h-screen bg-base-200">
               <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                         <h1 className="text-5xl font-bold">Login now!</h1>
                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                         <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                   {errors.email && <span>This field is required</span>}
                              </div>
                              <div className="form-control">

                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <div className="flex justify-between items-center border-2 py-4 rounded-lg px-4">
                                        <input type={toggle ? 'text' : 'password'} {...register("password", { required: true })} placeholder="password" style={{ border: 'none', outline: 'none' }} />
                                        <span onClick={() => setToggle(!toggle)}>
                                             {toggle ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                                        </span>
                                   </div>
                                   {errors.password && <span>This field is required</span>}
                              </div>
                              <p>New to this website? <Link className="text-blue-500" to='/signup'>Register</Link></p>
                              <p className="text-red-500">{error}</p>
                              <div className="form-control mt-6">
                                   <button className="btn btn-primary">Login</button>
                              </div>

                         </form>
                         <div className="divider">OR</div>
                         <div className="text-center mb-10">
                              <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                                   <FaGoogle></FaGoogle>
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;