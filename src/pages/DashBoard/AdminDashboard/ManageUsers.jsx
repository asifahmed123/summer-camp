import { useQuery } from "react-query";

const ManageUsers = () => {
  
     const { data: users = [], refetch } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const res = await fetch('http://localhost:5000/users')
               return res.json()
          }

     })

     const handleMakeAdmin = (id) => {
          fetch(`http://localhost:5000/users/admin/${id}`, {
               method: 'PATCH'
          })
               .then(res => res.json())
               .then(data => {
                    refetch()
                    console.log(data)
               })
     }

     const handleMakeInstructor = (id) => {
          fetch(`http://localhost:5000/users/instructor/${id}`, {
               method: 'PATCH'
          })
               .then(res => res.json())
               .then(data => {
                    refetch()
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
                                   {/* {user.role === 'admin'? <td>Admin</td> : <td>Make admin</td>}
                                   {user.role === 'instructor'? <td>instructor</td> : <td>Make instructor</td>} */}
                                   <td>{user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-active btn-secondary btn-sm">Make Admin</button>}</td>


                                   <td>{user.role === 'instructor' ? 'instructor' : <button onClick={() => handleMakeInstructor(user._id)} className="btn btn-active btn-secondary btn-sm">Make Instructor</button>}</td>
                              </tr>)}

                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default ManageUsers;