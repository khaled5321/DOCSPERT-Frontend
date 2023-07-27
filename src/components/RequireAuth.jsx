import { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from "../App";


function RequireAuth() {
    const { user } = useContext(UserContext);

    return user ? <Outlet /> : <Navigate to="/login" />;

}

export default RequireAuth