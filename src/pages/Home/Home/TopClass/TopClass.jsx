import { useQuery } from "react-query";
import useAxiosSecure from "../../../../Hocks/useAxiosSecure";

const TopClass = () => {

     const [axiosSecure] = useAxiosSecure();
     const { data: classes = [] } = useQuery({
          queryKey: ['classes'],
          queryFn: async () => {
               const res = await axiosSecure.get('/topClasses')
               return res.data
          }
     })

     const topClasses = classes.sort((a, b) => b.enrolledStuNum - a.enrolledStuNum).slice(0, 6);

     return (
          <>
          <h2 className="text-6xl font-semibold text-center mb-10 underline">Popular Classes</h2>
               <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-20">
                    {
                         topClasses.map(item => <div key={item._id} className="card card-compact card-style w-96 bg-base-100 shadow-xl">
                              <figure><img src={item.image} alt="Shoes" /></figure>
                              <div className="card-body">
                                   <h2 className="card-title">{item.classname}</h2>
                                   <p>Number Of Students: {item.enrolledStuNum}</p>
                              </div>
                         </div>)
                    }
               </div>
          </>
     );
};

export default TopClass;