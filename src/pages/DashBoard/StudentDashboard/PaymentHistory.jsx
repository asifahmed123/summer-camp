import { useQuery } from "react-query";
import useAuth from "../../../Hocks/useAuth";
import useAxiosSecure from "../../../Hocks/useAxiosSecure";

const PaymentHistory = () => {
     const { user, loading } = useAuth();
     const [axiosSecure] = useAxiosSecure();

     const { data: enrolledClasses = [] } = useQuery({
          queryKey: ['enrolledStudents'],
          enabled: !loading,
          queryFn: async () => {
               const res = await axiosSecure.get(`/enrolledStudents/${user?.email}`)
               return res.data
          }
     })

     const formatShortDate = (dateString) => {
          const date = new Date(dateString);
          const options = {
               year: 'numeric',
               month: 'short',
               day: 'numeric',
               hour: 'numeric',
               minute: 'numeric'
          };
          return date.toLocaleDateString(undefined, options);
     };

     return (
          <div className="overflow-x-auto w-full">
               <table className="table">
                    {/* head */}
                    <thead>
                         <tr>
                              <th>
                                   #
                              </th>
                              <th>Class Image</th>
                              <th>Class Name</th>
                              <th>TransactionId</th>
                              <th>Date</th>
                         </tr>
                    </thead>
                    <tbody>
                         {enrolledClasses.map((item, index) => <tr key={item._id}>
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
                              <td>{item.transactionId ? item.transactionId : 'No transaction ID Found'}</td>
                              <th>
                                   {formatShortDate(item.date)}
                              </th>
                         </tr>)}

                    </tbody>
               </table>
          </div>
     );
};

export default PaymentHistory;