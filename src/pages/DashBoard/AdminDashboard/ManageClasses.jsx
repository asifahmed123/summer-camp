import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hocks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageClasses = () => {

     const [axiosSecure] = useAxiosSecure();
     const { data: classes = [], refetch } = useQuery({
          queryKey: ['status'],
          queryFn: async () => {
               const res = await axiosSecure.get('/classes')
               return res.data;
          }
     })

     const handleApprove = (id) => {
          const updateApp = { status: 'approved' };
          axiosSecure
               .patch(`/classes/${id}`, updateApp)
               .then((response) => {
                    if (response.data.modifiedCount > 0) {

                         Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'is approved Now!',
                              showConfirmButton: false,
                              timer: 1500,
                         });
                         refetch();
                    }
               })
               .catch((error) => {
                    console.log(error);
               });
     }

     const handleDenied = (id) => {
          const updateStatus = { status: 'denied' };
          axiosSecure
               .patch(`/classes/${id}`, updateStatus)
               .then((response) => {
                    if (response.data.modifiedCount > 0) {

                         Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'is  denied Now!',
                              showConfirmButton: false,
                              timer: 1500,
                         });
                         refetch();
                    }
               })
               .catch((error) => {
                    console.log(error);
               });
     };

     return (
          <div className="overflow-x-auto">
               <table className="table">
                    {/* head */}
                    <thead>
                         <tr>
                              <th>#</th>
                              <th>Class Image</th>
                              <th>Class Name</th>
                              <th>Instructor Name</th>
                              <th>Instructor Email</th>
                              <th>Available seats</th>
                              <th>Price</th>
                              <th>Status</th>
                              <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {classes.map((item, index) => <tr key={item._id}>
                              <th>
                                   {index + 1}
                              </th>
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
                              <td>{item.name}</td>
                              <td>
                                   {item.email}
                              </td>
                              <td className="text-end">{item.availableSeats}</td>
                              <td className="text-end">{item.price}</td>
                              <td>{item.status}</td>
                              <td className="flex flex-col gap-2">
                                   <button onClick={() => handleApprove(item._id)} className="btn btn-success btn-xs">
                                        Approve
                                   </button>
                                   <button onClick={() => handleDenied(item._id)} className="btn btn-warning btn-xs">
                                        Deny
                                   </button>
                                   <Link to={`/dashboard/feedback/${item._id}`}>
                                        <button className="btn btn-info btn-xs">
                                             Send Feedback
                                        </button>
                                   </Link>
                              </td>
                         </tr>)}

                    </tbody>
               </table>
          </div>
     );
};

export default ManageClasses;