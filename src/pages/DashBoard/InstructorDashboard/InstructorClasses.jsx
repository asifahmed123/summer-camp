import { useQuery } from "react-query";
import useAuth from "../../../Hocks/useAuth";
import useAxiosSecure from "../../../Hocks/useAxiosSecure";

const InstructorClasses = () => {
     const { user } = useAuth()
     const [axiosSecure] = useAxiosSecure();
     const { data: allclass = [], } = useQuery(['allclass'], async () => {
          const res = await axiosSecure.get(`/classes/${user?.email}`)
          return res.data;
     })
     console.log(allclass);
     return (
          <div className="overflow-x-auto w-full">
               <table className="table">
                    {/* head */}
                    <thead>
                         <tr>
                              <th>
                                   #
                              </th>
                              <th>Name</th>
                              <th>Class Info</th>
                              <th>Price</th>
                              <th>seats</th>
                              <th>Status</th>
                              <th>Total Enrolled Students</th>
                              <th>Feedback</th>
                              <th>Update</th>
                         </tr>
                    </thead>
                    <tbody>
                         {allclass.map((item, index) => (
                              <tr key={item._id}>

                                   <th>{index + 1}</th>
                                   <td>
                                        <div>
                                             <div className="font-bold">{item.name}</div>
                                             <div className="text-sm opacity-50">{item.email}</div>
                                        </div>
                                   </td>
                                   <td>
                                        <div className="flex items-center space-x-3">
                                             <div className="avatar">
                                                  <div className="mask mask-squircle w-12 h-12">
                                                       <img src={item.image} />
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="font-bold">{item.classname}</div>
                                             </div>
                                        </div>
                                   </td>
                                   <td>{item.price}</td>
                                   <td>{item.availableSeats}</td>
                                   <td>{item.status}</td>
                                   <td>0</td>
                                   <td>{item.feedback}</td>
                                   <td><button className="btn btn-success btn-sm">Update</button></td>

                              </tr>
                         ))}

                    </tbody>

               </table>
          </div>

     );
};

export default InstructorClasses;