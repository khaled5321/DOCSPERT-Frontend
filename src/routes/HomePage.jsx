import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";
import AuthenticatedHeader from "../components/AuthenticatedHeader";
import Footer from "../components/Footer";
import LibraryBooks from "../components/LibraryBooks";


function HomePage() {
    const { user } = useContext(UserContext);
    const [username, setUsername] = useState('')
    let navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setUsername(user.username)
        }
        else {
            navigate("/login", { state: { 'msg': "" } });
        }
    }, [])

    return (
        <>
            <AuthenticatedHeader username={username} isAuthor={user.is_author} />
            <main className="bg-slate-100 min-h-screen">
                <div className="container py-12 mx-auto flex flex-col gap-12 justify-center">
                    <h1 className="text-4xl font-bold drop-shadow text-secondary text-center">
                        Library
                    </h1>

                    <LibraryBooks />
                </div>
            </main >
            <Footer />
        </>
    );
}

export default HomePage