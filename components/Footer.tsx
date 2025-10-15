const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Agency Name. All rights reserved.</p>
                <p>
                    <a href="/privacy" className="underline">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
