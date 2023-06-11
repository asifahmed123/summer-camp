
import useAxiosSecure from '../../Hocks/useAxiosSecure';


const Card = ({ item }) => {
     const [axiosSecure] = useAxiosSecure();

     const handleSelect = () => {

          axiosSecure.post("/selectedclass", item).then((data) => {
               if (data.data.insertedId) {
                    alert('class added successful')
               }
          }).catch(error => {
               alert(error.response.data)
          })
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