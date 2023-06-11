import { useQuery } from "react-query";
import useAxiosSecure from "../../Hocks/useAxiosSecure";
import useAuth from "../../Hocks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Classes = () => {
     const { user } = useAuth();
     const navigate = useNavigate();
     const [axiosSecure] = useAxiosSecure();
     const { data: classes = [], refetch } = useQuery({
          queryKey: ['classes'],
          queryFn: async () => {
               const res = await axiosSecure.get('/classes')
               return res.data
          }
     })

     const handleSelect = (id) => {
          if (!user) {
               Swal.fire({
                    title: 'Need to Login!',
                    text: "Do you want to Login?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Login!'
               }).then((result) => {
                    if (result.isConfirmed) {
                         navigate('/login')
                    }
               })
          }
     }

     return (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
               {
                    classes.map(item => <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                         <figure><img src={item.image} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">Class: {item.name}</h2>
                              <p>Instructor Name: {item.instructor}</p>
                              <p>Available seats: {item.availableSeats}</p>
                              <p>Price: {item.price}</p>
                              <div className="card-actions justify-end">
                                   <button onClick={() => handleSelect(item._id)} className="btn btn-secondary">Select</button>
                              </div>
                         </div>
                    </div>)
               }
          </div>
     );
};

export default Classes;