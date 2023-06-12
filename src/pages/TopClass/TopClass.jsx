import { useQuery } from "react-query";
import useAxiosSecure from "../../Hocks/useAxiosSecure";
import Card from "../Classes/Card";


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
                    classes .filter(item => item.status === 'approved').map(item => <Card key={item._id} item={item}></Card>)
               }
          </div>
     );
};

export default TopClass;