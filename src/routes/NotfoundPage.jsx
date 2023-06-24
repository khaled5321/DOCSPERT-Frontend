function NotfoundPage() {
    return (
        <>
            <div id="NotfoundPage"
                className="container pt-40  text-xl md:text-2xl mx-auto flex flex-col items-center justify-center">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i className="text-red-500">Page Not Found</i>
                </p>
            </div>
        </>
    );
}

export default NotfoundPage