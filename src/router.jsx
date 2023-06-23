import { createBrowserRouter } from "react-router-dom";
import NotfoundPage from "./routes/NotfoundPage.jsx";
import App from "./App.jsx";
import HomePage from "./routes/HomePage.jsx";
import LoginPage from "./routes/LoginPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotfoundPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "login/",
                element: <LoginPage />,
            },
            // {
            //     path: "join/",
            //     element: <LoginPage />,
            // },
        ],
    },
]);

export default router;