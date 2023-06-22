import { useRouteError } from "react-router-dom";

function NotfoundPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="NotfoundPage"
            className="container min-h-screen text-xl md:text-2xl my-auto mx-auto flex flex-col items-center justify-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i className="text-red-500">{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default NotfoundPage