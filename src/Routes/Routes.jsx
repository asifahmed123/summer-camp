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
import ManageUsers from "../pages/DashBoard/AdminDashboard/ManageUsers";
import ManageClasses from "../pages/DashBoard/AdminDashboard/ManageClasses";
import AddClass from "../pages/DashBoard/InstructorDashboard/AddClass";
import InstructorClasses from "../pages/DashBoard/InstructorDashboard/InstructorClasses";
import Instructors from "../pages/Instructors/Instructors";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import Feedback from "../pages/DashBoard/AdminDashboard/Feedback";
import Payment from "../pages/DashBoard/StudentDashboard/Payment/Payment";
import TopInstructor from "../pages/TopInstructor/TopInstructor";



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
               },
               {
                    path: 'instructors',
                    element: <Instructors></Instructors>
               },
               
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
               },
               {
                    path: 'payment/:id',
                    element: <Payment></Payment>
               },
               // admin routes //
               {
                    path: 'manageusers',
                    element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
               },
               {
                    path: 'manageclasses',
                    element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
               },
               {
                    path: 'feedback/:id',
                    element: <AdminRoute><Feedback></Feedback></AdminRoute>
               },
               // instructors routes //
               {
                    path: 'addclass',
                    element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
               },
               {
                    path: 'instructorclasses',
                    element: <InstructorRoute><InstructorClasses></InstructorClasses></InstructorRoute>
               }
          ]
     }
]);