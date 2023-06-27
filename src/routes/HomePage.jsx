import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div id='HomePage' className="py-36 bg-background">
            <div className="container mx-auto flex flex-col  items-center justify-center">
                <h2 className="text-2xl font-bold text-center text-gray-200 mb-2 ">Welcome To</h2>
                <h1 className="text-6xl font-extrabold text-center drop-shadow font-serif 
                from-purple-700 via-pink-700 to-blue-700 bg-gradient-to-r bg-clip-text 
                text-transparent">
                    Book Store
                </h1>
                <p className="text-2xl font-bold text-white text-center mt-4 mb-10">
                    The best place to find and read books
                </p>
                <Link to='/login' className="px-6 py-2 rounded bg-primary font-bold text-white">Browse Books</Link>
            </div>
        </div>
    );
}

export default HomePage