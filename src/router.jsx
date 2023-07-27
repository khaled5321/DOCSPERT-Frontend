import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./routes/HomePage.jsx";
import LayoutWithNavbar from "./routes/LayoutWithNavbar.jsx";
import StartPage from "./routes/StartPage.jsx";
import NotfoundPage from "./routes/NotfoundPage.jsx";
import AuthLayout from "./routes/AuthLayout.jsx";
import JoinForm from "./components/JoinForm.jsx";
import LoginForm from "./components/LoginForm.jsx";
import RequireAuth from "./components/RequireAuth.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<LayoutWithNavbar />}>
                <Route index path='/' element={<StartPage />} />
                <Route path="/404" element={<NotfoundPage />} />
                <Route path="*" element={<Navigate replace to="/404" />} />
            </Route>
            <Route element={<AuthLayout />}>
                <Route path='/join' element={<JoinForm />} />
                <Route path='/login' element={<LoginForm />} />
            </Route>

            <Route element={<RequireAuth />}>
                <Route path="/home" element={<HomePage />} />
            </Route>
        </>
    )
);

export default router