import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hocks/useAxiosSecure";
import useAuth from "../../../../Hocks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ price, item }) => {
     console.log(price);

     const stripe = useStripe();
     const elements = useElements();
     const { user } = useAuth();
     const [cardError, setCardError] = useState('');
     const [axiosSecure] = useAxiosSecure();
     const [clientSecret, setClientSecret] = useState("");
     const [processing, setProcessing] = useState(false);
     const [transactionId, setTransactionId] = useState('');
     const [paymentStatus, setPaymentStatus] = useState(false)

     useEffect(() => {
          if(price > 0){
               axiosSecure.post("/create-payment-intent", { price })
               .then(res => {
                    setClientSecret(res.data.clientSecret)
               })
          }
     }, [price, axiosSecure])


     const handleSubmit = async (event) => {
          event.preventDefault();

          if (!stripe || !elements) {
               return;
          }

          const card = elements.getElement(CardElement);
          if (card == null) {
               return;
          }

          const { error, paymentMethod } = await stripe.createPaymentMethod({
               type: 'card',
               card,
          });
          if (error) {
               console.log(error);
               setCardError(error.message);
          } else {
               console.log(paymentMethod);
               setCardError('');
          }

          setProcessing(true)

          const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
               clientSecret,
               {
                    payment_method: {
                         card: card,
                         billing_details: {
                              email: user?.email || 'Unknown',
                              name: user?.displayName || 'Anonymous'
                         },
                    },
               },
          );

          if(confirmError){
               console.log(confirmError);
          }

          console.log(paymentIntent);
          setProcessing(false);
          if(paymentIntent.status === 'succeeded'){
               setPaymentStatus(true)
               setTransactionId(paymentIntent.id)

               const payment = {
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    classname: item.classname,
                    image: item.image,
                    price,
                    availableSeats: item.availableSeats,
                    date: new Date(),
                    id: item._id,
                    enrolledStuNum: 1 
               }

               axiosSecure.patch('/payments', payment)
               .then(res => {
                    if(res.data.updatePaymentResult.modifiedCount){
                         Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'Payment Successful',
                              showConfirmButton: false,
                              timer: 1500
                            })
                    }
               })
          }
     }

     return (
          <>
               <form className="w-2/3 mt-8" onSubmit={handleSubmit}>
                    <CardElement
                         options={{
                              style: {
                                   base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                             color: '#aab7c4',
                                        },
                                   },
                                   invalid: {
                                        color: '#9e2146',
                                   },
                              },
                         }}
                    />
                    <button className="btn btn-success btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing || paymentStatus}>
                         Pay
                    </button>
               </form>
               {cardError && <p className="text-red-500">{cardError}</p>}
               {transactionId && <p className="text-green-600">Payment succeeded with transactionId: {transactionId}</p>}
          </>
     );
};

export default CheckoutForm;