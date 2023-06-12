import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hocks/useAxiosSecure";
import { Link } from "react-router-dom";
import useAuth from "../../../Hocks/useAuth";

const StudentClasses = () => {
     const {user, loading} = useAuth();
     const [axiosSecure] = useAxiosSecure();

     const { data: classes = [], refetch } = useQuery({
          queryKey: ['selectedclass'],
          enabled: !loading,
          queryFn: async () => {
               const res = await axiosSecure.get(`/selectedclass/${user?.email}`)
               return res.data
          }
     })
     

     const handleDelete = (id) => {
          console.log(id);

          axiosSecure.delete(`/selectedclass/${id}`)
          .then(data => {
               refetch();
               console.log(data.data);
          })
     }

     return (
          <div className="overflow-x-auto w-full">
               <table className="table">
                    {/* head */}
                    <thead>
                         <tr>
                              <th>#</th>
                              <th>Class Image</th>
                              <th>Class Name</th>
                              <th>Available Seats</th>
                              <th>Price</th>
                              <th>Pay</th>
                              <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {classes.map((item, index) => <tr key={item._id}>
                              <th>{index + 1}</th>
                              <td>
                                   <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                             <div className="mask mask-squircle w-12 h-12">
                                                  <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                             </div>
                                        </div>
                                   </div>
                              </td>
                              <td>
                                   {item.classname}
                              </td>
                              <td>{item.availableSeats}</td>
                              <td>{item.price}</td>
                              <td><Link to={`/dashboard/payment/${item._id}`}><button className="btn btn-info btn-sm">Pay</button></Link></td>
                              <td><button onClick={() => handleDelete(item._id)} className="btn btn-warning btn-sm">Delete</button></td>
                         </tr>)}
                         
                    </tbody>
               </table>
          </div>
     );
};

export default StudentClasses;