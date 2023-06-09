import { useQuery } from "react-query";

const ManageUsers = () => {
     const {data: users = [], refetch} = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const res = await fetch('http://localhost:5000/users')
               return res.json()
          } 
               
     })
     return (
          <div>
               <h2>manage users by admin</h2>
               {users.length}
          </div>
     );
};

export default ManageUsers;