
import Swal from 'sweetalert2';
import useAuth from '../../Hocks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hocks/useAxiosSecure';

const Card = ({ item }) => {
     const { user } = useAuth();
     const navigate = useNavigate();
     const [axiosSecure] = useAxiosSecure();

     const handleSelect = (id) => {
          if (!user) {
               Swal.fire({
                    title: 'Need to Login!',
                    text: "Do you want to Login?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Login!'
               }).then((result) => {
                    if (result.isConfirmed) {
                         navigate('/login')
                    }
               })
          }
          else {
               ax
          }
     }
     return (
          <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
               <figure><img src={item.image} alt="Shoes" /></figure>
               <div className="card-body">
                    <h2 className="card-title">Class: {item.name}</h2>
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