import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotfoundPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <Header />
            <div id="NotfoundPage"
                className="container min-h-screen text-xl md:text-2xl my-auto mx-auto flex flex-col items-center justify-center">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i className="text-red-500">{error.statusText || error.message}</i>
                </p>
            </div>
            <Footer />
        </>
    );
}

export default NotfoundPage