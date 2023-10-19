import { useContext } from "react";
import { AuthContext } from "../Components/Providers/AuthProvider";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    console.log(user)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    return  <Navigate state={location.pathname} to='/login'></Navigate>

}
export default PrivateRoute;