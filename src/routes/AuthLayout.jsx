import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { UserContext } from "../App";


function AuthLayout() {
    const { user } = useContext(UserContext);


    if (user) {
        return <Navigate to='/home' />
    }

    return (
        <div className="bg-background min-h-screen">
            <div className="flex items-center justify-center min-h-screen py-6">
                <div className="bg-white py-5 rounded-md shadow-md w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout