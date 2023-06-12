
import { toast } from 'react-toastify';
import useAxiosSecure from '../../Hocks/useAxiosSecure';
import useAuth from '../../Hocks/useAuth';


const Card = ({ item }) => {
     const { user } = useAuth();
     const [axiosSecure] = useAxiosSecure();

     const handleSelect = () => {

          const { image, name, price, instructor, availableSeats, classname, status, feedback, selectedStudentsNumber } = item;

          const newItem = { email: user?.email, image, name, price, instructor, availableSeats, classname, status, feedback, selectedStudentsNumber }

          axiosSecure.post("/selectedclass", newItem).then((data) => {
               if (data.data.insertedId) {
                    toast('class added successful!', {
                         position: "top-center",
                         autoClose: 3000,
                         hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                         draggable: true,
                         progress: undefined,
                         theme: "light",
                    });
               }
          }).catch(error => {
               toast.error(error.response.data, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
               });
          })
     }
     return (
          <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
               <figure><img src={item.image} alt="Shoes" /></figure>
               <div className="card-body">
                    <h2 className="card-title">Class: {item.classname}</h2>
                    <p>Instructor Name: {item.instructor}</p>
                    <p>selected: {item.selectedStudentsNumber}</p>
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