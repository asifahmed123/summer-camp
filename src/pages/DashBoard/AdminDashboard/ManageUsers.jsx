import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hocks/useAxiosSecure";
import useAuth from "../../../Hocks/useAuth";
import { useState } from "react";

const ManageUsers = () => {
     const { loading } = useAuth()
     const [role, setRole] = useState('student');

     const [axiosSecure] = useAxiosSecure()
     const { data: users = [], refetch } = useQuery({
          queryKey: ['users'],
          enabled: !loading,
          queryFn: async () => {
               const res = await axiosSecure.get('/users')
               return res.data;
          }

     })

     const handleMakeAdmin = (id) => {
          fetch(`https://assignment-12-server-two-xi.vercel.app/users/admin/${id}`, {
               method: 'PATCH'
          })
               .then(res => res.json())
               .then(data => {
                    refetch()
                    setRole(`admin_${id}`)
                    console.log(data)
               })
     }

     const handleMakeInstructor = (id) => {
          fetch(`https://assignment-12-server-two-xi.vercel.app/users/instructor/${id}`, {
               method: 'PATCH'
          })
               .then(res => res.json())
               .then(data => {
                    refetch()
                    setRole(`instructor_${id}`)
                    console.log(data);
               })
     }

     return (
          <div className="w-full">
               <h2>manage users by admin</h2>
               {users.length}

               <div className="overflow-x-auto">
                    <table className="table">
                         {/* head */}
                         <thead>
                              <tr>
                                   <th>#</th>
                                   <th>Name</th>
                                   <th>Email</th>
                                   <th>Action</th>
                                   <th>Action</th>
                              </tr>
                         </thead>
                         <tbody>
                              {users.map((user, index) => <tr key={user._id}>
                                   <th>{index + 1}</th>
                                   <td>{user.name}</td>
                                   <td>{user.email}</td>

                                   <td><button disabled={role === `admin_${user._id}` || user.role === 'admin' ? true : false} onClick={() => handleMakeAdmin(user._id)} className="btn btn-active btn-secondary btn-sm">Make Admin</button></td>


                                   <td><button disabled={role === `instructor_${user._id}` || user.role === 'instructor' ? true : false} onClick={() => handleMakeInstructor(user._id)} className="btn btn-active btn-secondary btn-sm">Make Instructor</button></td>
                              </tr>)}

                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default ManageUsers;