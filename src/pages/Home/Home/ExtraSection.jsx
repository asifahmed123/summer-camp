
import { FaHeadphones, FaKey, FaRegClock, FaRocket } from 'react-icons/fa';

const ExtraSection = () => {
     return (
          <div>
               <div className='lg:flex bg-fuchsia-100 mt-20 py-20 px-10 mb-20'>
                    <div className="lg:w-1/4 lg:mr-4 mb-6">
                         <p><FaRegClock className="text-6xl"></FaRegClock></p>
                         <h2 className="text-2xl font-bold text-green-500 mt-5 mb-2">Time Management</h2>
                         <p>We are very aware of time maintaining</p>
                    </div>
                    <div className="lg:w-1/4 lg:mr-4 mb-6">
                         <FaKey className="text-6xl"></FaKey>
                         <h2 className="text-2xl font-bold text-green-500 mt-5 mb-2">Save Money</h2>
                         <p>Save $5 every year compared to the monthly plan by paying yearly.</p>
                    </div>
                    <div className="lg:w-1/4 lg:mr-4 mb-6">
                         <FaRocket className="text-6xl"></FaRocket>
                         <h2 className="text-2xl font-bold text-green-500 mt-5 mb-2">Fast Returns</h2>
                         <p>Money back. If the service didn’t suit you</p>
                    </div>
                    <div className="lg:w-1/4 lg:mr-4 mb-6">
                         <FaHeadphones className="text-6xl"></FaHeadphones>
                         <h2 className="text-2xl font-bold text-green-500 mt-5 mb-2">Online Support</h2>
                         <p>Use our 24/7 customer hotline so you’re not alone if you have a question</p>
                    </div>
               </div>
          </div>
     );
};

export default ExtraSection;