
import useAuth from '../../Hocks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hocks/useAxiosSecure';
import { toast } from 'react-toastify';

const Card = ({ item }) => {
     const { user } = useAuth();
     const navigate = useNavigate();
     const [axiosSecure] = useAxiosSecure();
     
     const handleSelect = (id) => {
          // const selected = item.filter(singleItem => singleItem._id === id)
          console.log(item);
          axiosSecure.post("/selectedclass", item).then((data) => {
               if (data.data.message) {
                 return toast.error("Class already added");
               }
         
               if (data.data.insertedId) {
                 toast.success("Class added");
               }
             });
     }
     return (
          <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
               <figure><img src={item.image} alt="Shoes" /></figure>
               <div className="card-body">
                    <h2 className="card-title">Class: {item.classname}</h2>
                    <p>Instructor Name: {item.instructor}</p>
                    <p>Available seats: {item.availableSeats}</p>
                    <p>Price: {item.price}</p>
                    <div className="card-actions justify-end">
                         <button onClick={() => handleSelect(item._id)} className="btn btn-secondary">Select</button>
                    </div>
               </div>
          </div>
     );
};

export default Card;