import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LayoutWithNavbar() {
    return (
        <>
            <Header />

            <main id="HomePage" className="container mx-auto min-h-screen">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}

export default LayoutWithNavbar