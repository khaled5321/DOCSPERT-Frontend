import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utlis";

function AuthenticatedHeader({ username, isAuthor }) {

    return (
        <header className="bg-primary p-4 font-bold shadow">
            <nav className="container mx-auto items-center flex justify-between">
                <Link to="/" className="text-standard text-2xl"><h1>Book Store</h1></Link>

                <div className="flex items-center justify-center gap-4">
                    <h2 className="text-standard font-bold">
                        Welcome, {capitalizeFirstLetter(username)}
                    </h2>
                </div>
            </nav>
        </header>
    );
}

export default AuthenticatedHeader