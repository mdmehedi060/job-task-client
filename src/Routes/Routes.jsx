/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import Home from "../Home/Home";
import Error from "../Error/Error";
import SignIn from "../Login/SignIn";
import Register from "../Login/Register";
import Dashboard from "../Components/Dashboard/Dashboard";
import PrivateRoute from "../Login/PrivateRoute";
import NewTask from "../Components/Dashboard/NewTasks";
import PreviousTasks from "../Components/Dashboard/previousTasks";
import DashboardHome from "../Components/Dashboard/DashboardHome";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/signin",
                element: <SignIn></SignIn>,
            },
            {
                path: "/register",
                element: <Register></Register>
            },

        ]

    },

    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [

            {
                path: "Home",
                element: <DashboardHome></DashboardHome>,
            },
            {
                path: "newTask",
                element: <NewTask></NewTask>
            },
            {
                path: "previousTasks",
                element: <PreviousTasks></PreviousTasks>
            },

        ]
    },

])

export default Routes;