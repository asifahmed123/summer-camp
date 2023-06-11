import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hocks/useAuth";
import useAdmin from "../Hocks/useAdmin";


const AdminRoute = ({ children }) => {
     const { user, loading } = useAuth();
     const [isAdmin, isAdminLoading] = useAdmin();
     const location = useLocation()

     if (loading || isAdminLoading) {
          return <progress className="progress w-56"></progress>
     }

     if (user && isAdmin) {
          return children
     }

     return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default AdminRoute;