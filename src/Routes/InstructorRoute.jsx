import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hocks/useAuth";
import useInstructor from "../Hocks/useInstructor";


const InstructorRoute = ({ children }) => {
     const { user, loading } = useAuth();
     // console.log(loading);
     const [isInstructor, isInstructorLoading] = useInstructor();
     console.log(isInstructor, isInstructorLoading);
     const location = useLocation()

     if (loading || isInstructorLoading) {
          return <progress className="progress w-56"></progress>
     }

     if (user && isInstructor) {
          return children
     }

     return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default InstructorRoute;