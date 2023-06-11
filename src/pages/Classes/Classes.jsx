import { useQuery } from "react-query";
import useAxiosSecure from "../../Hocks/useAxiosSecure";
import Card from "./Card";

const Classes = () => {
     
     const [axiosSecure] = useAxiosSecure();
     const { data: classes = [], refetch } = useQuery({
          queryKey: ['classes'],
          queryFn: async () => {
               const res = await axiosSecure.get('/classes')
               return res.data
          }
     })

     

     return (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
               {
                    classes.map(item => <Card key={item._id} item={item}></Card>)
               }
          </div>
     );
};

export default Classes;