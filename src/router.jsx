import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LayoutWithNavbar from "./routes/LayoutWithNavbar.jsx";
import HomePage from "./routes/HomePage.jsx";
import NotfoundPage from "./routes/NotfoundPage.jsx";
import AuthLayout from "./routes/AuthLayout.jsx";
import JoinForm from "./components/JoinForm.jsx";
import LoginForm from "./components/LoginForm.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<LayoutWithNavbar />}>
                <Route index path='/' element={<HomePage />} />
                <Route path="/404" element={<NotfoundPage />} />
                <Route path="*" element={<Navigate replace to="/404" />} />
            </Route>
            <Route element={<AuthLayout />}>
                <Route path='/join' element={<JoinForm />} />
                <Route path='/login' element={<LoginForm />} />
            </Route>
        </>
    )
);

export default router