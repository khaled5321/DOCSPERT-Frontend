function JoinForm() {
    function handleSubmit(e) {
        e.preventDefault()
        console.log('hi')
    }

    return (
        <div id="JoinForm">
            <h1 className="text-center font-bold text-xl text-primary">Join Us!</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" className="input" placeholder="Enter your username" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="input" placeholder="Enter your email" required />

                <label htmlFor="role">You are:</label>
                <select name="role" id="role" className="input" required>
                    <option value="reader" selected>Reader</option>
                    <option value="author">Author</option>
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