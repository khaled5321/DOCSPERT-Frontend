import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LayoutWithNavbar from "./routes/LayoutWithNavbar.jsx";
import HomePage from "./routes/HomePage.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import NotfoundPage from "./routes/NotfoundPage.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<LayoutWithNavbar />}>
            <Route index path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path="/404" element={<NotfoundPage />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
        </Route>
    )
);

export default router