import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleErrors, sendRequest, setAuth } from "../api";

function LoginForm() {
    const { state } = useLocation();
    const [msg, setMsg] = useState(state ? state.msg : "")
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value

        try {
            let response = await sendRequest("POST",
                "auth/login/",
                { username, password }
            )
            if (!response.ok) {
                let errors = await response.json()
                let errorMsg = handleErrors(errors)
                setMsg(errorMsg.join('\n'))
            }
            else {
                setMsg("")
                let data = await response.json()

                setAuth(data.access, data.refresh)
                navigate("/home");
            }
        }
        catch (err) {
            setMsg("Server error!")
        }
    }

    return (
        <div id="LoginForm">
            <h1 className="text-center font-bold text-xl text-primary">Login</h1>

            <form className="form" onSubmit={handleSubmit}>
                <h3 className="text-center mt-2 text-red-500 max-w-md">{msg}</h3>

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" className="input" placeholder="Enter your username" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className="input" placeholder="Enter your password" required />

                <p className="text-primary mt-2">
                    Don&apos;t have an account? <Link to="/join" className="text-primary font-bold">Register</Link>
                </p>

                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm