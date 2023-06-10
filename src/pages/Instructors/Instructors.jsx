import { useQuery } from "react-query";

const Instructors = () => {
     const { data: instructors = [] } = useQuery({
          queryKey: ['instructors'],
          queryFn: async () => {
               const res = await fetch('http://localhost:5000/users/instructors')
               return res.json()
          }
     })
     return (
          <>
               <div  className="grid lg:grid-cols-3">
               {
                    instructors.map(item => <div key={item._id}>
                         <div className="card card-compact w-96 bg-base-100 shadow-xl">
                              <figure><img src={item.photo} width={90} alt="Shoes" /></figure>
                              <div className="card-body">
                                   <h2 className="card-title">Instructor Name: {item.name}</h2>
                                   <p>Instructor Email: {item.email}</p>
                              </div>
                         </div>
                    </div>)
               }
               </div>
          </>
     );
};

export default Instructors;