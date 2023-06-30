import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { handleErrors, sendRequest } from "../api";

function JoinForm() {
    const [msg, setMsg] = useState([])
    let navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        let username = e.target.username.value
        let email = e.target.email.value
        let is_author = e.target.role.value
        let password = e.target.password.value
        let password2 = e.target.confirmPassword.value
        let confirmPassword = e.target.confirmPassword.value

        if (password !== confirmPassword) {
            setMsg(["Passwords don't match!"])
            return
        }
        if (password.length < 8) {
            setMsg(["Password must be at least 8 characters!"])
            return
        }

        await sendRequest("POST",
            "auth/signup/",
            { username, email, password, password2, is_author }
        ).then(async (res) => {
            if (!res.ok) {
                let errors = await res.json()
                let errorMsg = handleErrors(errors)
                setMsg(errorMsg)
            }
            else {
                setMsg([])
                navigate("/login", { state: { 'msg': "Account created! Please login" } });
            }
        }).catch(err => { console.log(err) })
    }

    return (
        <div id="JoinForm">
            <h1 className="text-center font-bold text-xl text-primary">Join Us!</h1>
            <form className="form" onSubmit={handleSubmit}>
                <ul className="text-center mt-2 text-red-500">
                    {msg.map((txt, i) => <li key={i}>{txt}</li>)}
                </ul>

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" className="input" placeholder="Enter your username" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="input" placeholder="Enter your email" required />

                <label htmlFor="role">You are:</label>
                <select name="role" id="role" className="input" required>
                    <option value={false}>Reader</option>
                    <option value={true}>Author</option>
                </select>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className="input" placeholder="Enter your password" required />

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" className="input" placeholder="Confirm your password" required />

                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    );
}

export default JoinForm