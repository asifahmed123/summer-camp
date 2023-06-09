import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import StudentClasses from "../pages/DashBoard/StudentDashboard/StudentClasses";
import EnrolledClasses from "../pages/DashBoard/StudentDashboard/EnrolledClasses";
import PaymentHistory from "../pages/DashBoard/StudentDashboard/PaymentHistory";
import Classes from "../pages/Classes/Classes";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: 'login',
                    element: <Login></Login>
               },
               {
                    path: 'signup',
                    element: <SignUp></SignUp>
               },
               {
                    path: 'classes',
                    element: <Classes></Classes>
               }
          ]
     },
     {
          path: 'dashboard',
          element: <Dashboard></Dashboard>,
          children: [
               {
                    path: 'studentclasses',
                    element: <StudentClasses></StudentClasses>
               },
               {
                    path: 'enrolledclasses',
                    element: <EnrolledClasses></EnrolledClasses>
               },
               {
                    path: 'paymenthistory',
                    element: <PaymentHistory></PaymentHistory>
               }
          ]
     }
]);