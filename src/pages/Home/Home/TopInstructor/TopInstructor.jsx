import { useQuery } from "react-query";
import useAxiosSecure from "../../../../Hocks/useAxiosSecure";


const TopInstructor = () => {

     const [axiosSecure] = useAxiosSecure();

     const { data: instructors = [] } = useQuery({
          queryKey: ['instructors'],
          queryFn: async () => {
               const res = await axiosSecure.get('/instructors');
               return res.data
          }
     })
     console.log(instructors);
     return (
          <>
               <h2 className="text-6xl font-semibold text-center mb-10 underline">Popular Instructors</h2>
               <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {
                         instructors.map(item => <div key={item._id} className="card card-style w-96 bg-base-100 shadow-xl">
                              <div className="card-body">
                                   <h2 className="card-title">Instructor Name: {item.instructorName}</h2>
                                   <p>Number Of Students: {item.numberOfStudents}</p>
                              </div>
                              <figure><img className="h-96 w-full" src={item.image} alt="Shoes" /></figure>
                         </div>)
                    }
               </div>
          </>
     );
};

export default TopInstructor;