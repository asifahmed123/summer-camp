import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => {
          console.log(data)
     };

     const password = watch('password');
     return (
          <div className="hero min-h-screen bg-base-200">
               <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                         <h1 className="text-5xl font-bold">SignUp now!</h1>
                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                         <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                   {errors.email && <span className="text-red-500">This field is required</span>}
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>

                                   <input type='password' {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*?[0-9])/
                                   })} placeholder="password" className="input input-bordered" />

                                   {errors.password && <span className="text-red-500">This field is required</span>}

                                   {errors.password?.type === 'minLength' && <span className="text-red-500">Password should be greater than 6 character</span>}

                                   {errors.password?.type === 'maxLength' && <span className="text-red-500">Password should be less than 20 character</span>}

                                   {errors.password?.type === 'pattern' && <span className="text-red-500">Password must have one capital letter one special character and one number</span>}
                              </div>

                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                   </label>

                                   <input type='password' {...register("confirmPassword", {
                                        required: true,
                                        validate: (value) =>
                                             value === password || "Passwords do not match"
                                   })} placeholder="Confirm password" className="input input-bordered" />

                                   {errors.confirmPassword && <span className="text-red-500">This field is required</span>}
                                   {errors.confirmPassword && (
                                        <span className="text-red-500">{errors.confirmPassword.message}</span>
                                   )}
                              </div>
                              <p>Already have an account? <Link className="text-blue-500" to='/login'>Login</Link></p>
                              <div className="form-control mt-6">
                                   <button className="btn btn-primary">SignUp</button>
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

export default SignUp;