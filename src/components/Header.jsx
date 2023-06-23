import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-slate-500 p-4 font-bold">
            <nav className="container mx-auto flex justify-between">
                <Link to="/" className="text-white text-2xl"><h1>Book Store</h1></Link>
                <div className="flex items-center gap-4">
                    <Link to="/login" className="text-white">Join</Link>
                    <Link to="/login" className="text-white">Login</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header