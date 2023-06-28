import { Outlet } from "react-router-dom";

function AuthLayout() {

    return (
        <div className="bg-background h-screen">
            <div className="flex items-center justify-center h-full">
                <div className="bg-white py-5 rounded-md shadow-md w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout