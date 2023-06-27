import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-primary p-4 font-bold">
            <nav className="container mx-auto items-center flex justify-between">
                <Link to="/" className="text-standard text-2xl"><h1>Book Store</h1></Link>

                <div className="flex items-center justify-center gap-4">
                    <Link to="/join" className="text-standard px-4 py-2 bg-secondary rounded font-bold">Join</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header