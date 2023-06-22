import { createBrowserRouter } from "react-router-dom";
import NotfoundPage from "./routes/NotfoundPage.jsx";
import HomePage from "./routes/HomePage.jsx";
import LoginPage from "./routes/LoginPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotfoundPage />,
        // children: [
        //     {
        //         path: "login/",
        //         element: <LoginPage />,
        //     },
        // ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    }
]);

export default router;