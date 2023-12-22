/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from './../Providers/AuthProvider';


const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()
    
   
    if(loading){
        return <span></span>
    }
    if(user){
        return children
    }
    


    return <Navigate state={location.pathname} to ="/SignIn"></Navigate>
};

export default PrivateRoute;