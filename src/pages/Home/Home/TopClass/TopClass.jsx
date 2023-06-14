import { useQuery } from "react-query";
import useAxiosSecure from "../../../../Hocks/useAxiosSecure";
import Card from "../../../Classes/Card";


const TopClass = () => {

     const [axiosSecure] = useAxiosSecure();
     const { data: classes = [] } = useQuery({
          queryKey: ['classes'],
          queryFn: async () => {
               const res = await axiosSecure.get('/topClasses')
               return res.data
          }
     })



     return (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
               {
                    classes.filter(item => item.status === 'approved').map(item => <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                         <figure><img src={item.image} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">{item.classname}</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              <div className="card-actions justify-end">
                                   <button className="btn btn-primary">Buy Now</button>
                              </div>
                         </div>
                    </div>)
               }
          </div>
     );
};

export default TopClass;