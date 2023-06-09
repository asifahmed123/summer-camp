import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hocks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
     const { signInUser, updateUser, googleSignIn } = useAuth();
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const navigate = useNavigate()
     const location = useLocation();
     const from = location.state?.from?.pathname || "/";

     const onSubmit = data => {
          console.log(data)
          signInUser(data.email, data.password)
               .then((result) => {
                    console.log(result.user);
                    updateUser(data.name, data.photo)
                         .then(() => {
                              const savedUser = { name: data.name, email: data.email }

                              fetch('http://localhost:5000/users', {
                                   method: 'POST',
                                   headers: {
                                        'content-type': 'application/json'
                                   },
                                   body: JSON.stringify(savedUser)
                              })
                                   .then(res => res.json())
                                   .then(data => {
                                        console.log(data);
                                        if (data.insertedId) {
                                             Swal.fire({
                                                  position: 'top-end',
                                                  icon: 'success',
                                                  title: 'sign up successful',
                                                  showConfirmButton: false,
                                                  timer: 1500
                                             })
                                             navigate('/login')
                                        }
                                   })

                         })
                         .catch(error => {
                              console.log(error.message);
                         })

               })
     };
     const password = watch('password');

     const handleGoogleSignIn = () => {
          googleSignIn()
               .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
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
                         <h1 className="text-5xl font-bold">SignUp now!</h1>
                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                         <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Name</span>
                                   </label>
                                   <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                   {errors.name && <span className="text-red-500">This field is required</span>}
                              </div>

                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                   </label>
                                   <input type="text" {...register("photo", { required: true })} placeholder="PhotoURL" className="input input-bordered" />
                                   {errors.photo && <span className="text-red-500">This field is required</span>}
                              </div>

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

                                   {errors.password?.type === 'required' && <span className="text-red-500">This field is required</span>}

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

                                   {errors.confirmPassword?.type === 'required' && <span className="text-red-500">This field is required</span>}
                                   {errors.confirmPassword && (
                                        <span className="text-red-500">{errors.confirmPassword.message}</span>
                                   )}
                              </div>
                              <p>Already have an account? <Link className="text-blue-500" to='/login'>Login</Link></p>
                              <div className="form-control mt-6">
                                   <button className="btn btn-primary">SignUp</button>
                              </div>
                              <div className="divider">OR</div>

                         </form>
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

export default SignUp;