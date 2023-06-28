function LoginForm() {
    function handleSubmit(e) {
        e.preventDefault()
        console.log('hi')
    }

    return (
        <div id="LoginForm">
            <h1 className="text-center font-bold text-xl text-primary">Login</h1>

            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" className="input" placeholder="Enter your username" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className="input" placeholder="Enter your password" required />

                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm