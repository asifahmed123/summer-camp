import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hocks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";

const Feedback = () => {
     const { id } = useParams();
     const [axiosSecure] = useAxiosSecure();
     const navigate = useNavigate();

     const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
          const text = form.text.value;
          
          const updateFeedback = { feedback: text };
          
          axiosSecure
               .patch(`/classes/${id}`, updateFeedback)
               .then((response) => {
                    if (response.data.modifiedCount > 0) {
                         Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'feedback updated!',
                              showConfirmButton: false,
                              timer: 1500,
                         });
                         navigate('/dashboard/manageclasses')
                    }
               })
               .catch((error) => {
                    console.log(error);
               });
     }
     return (
          <>
               <form onSubmit={handleSubmit} className="form-control w-full px-40">
                    <label className="label">
                         <span className="label-text">Feedback</span>
                    </label>
                    <textarea name='text' className="textarea textarea-bordered h-40" placeholder="Feedback"></textarea>
                    <input type="submit" value="Add Feedback" className="btn btn-secondary mt-6" />
               </form>
          </>

     );
};

export default Feedback;