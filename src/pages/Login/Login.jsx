import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
     const [toggle, setToggle] = useState(false)
     const { register, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = data => {
          console.log(data)
     };
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
                              <div className="form-control mt-6">
                                   <button className="btn btn-primary">Login</button>
                              </div>
                              <div className="divider">OR</div>
                              <div className="text-center">
                              <button className="btn btn-circle btn-outline">
                                   <FaGoogle></FaGoogle>
                              </button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Login;