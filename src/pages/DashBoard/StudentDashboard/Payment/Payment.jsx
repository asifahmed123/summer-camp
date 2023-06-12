import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hocks/useAxiosSecure";
import { useQuery } from "react-query";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
     const { id } = useParams();
     const [axiosSecure] = useAxiosSecure();

     const { data: classes = [] } = useQuery({
          queryKey: ['selectedclass'],
          queryFn: async () => {
               const res = await axiosSecure.get('/selectedclass')
               return res.data
          }
     })

     const newItem = classes?.find(item => item._id === id);

     return (
          <div className="w-full px-40">
               <h2>Payment coming soon</h2>
               <Elements stripe={stripePromise}>
                    <CheckoutForm price={newItem?.price} item={newItem}></CheckoutForm>
               </Elements>
          </div>
     );
};

export default Payment;