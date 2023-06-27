import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LayoutWithNavbar() {
    return (
        <>
            <Header />

            <main id="layout" className="">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default LayoutWithNavbar