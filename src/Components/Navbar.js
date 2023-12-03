import React, { useRef, useState, useEffect } from "react";
import "../Styles/main.css";
import Home from './Home';

function Navbar() {
    const navRef = useRef();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // Update isScreenSmall on window resize
        const handleResize = () => {
            setIsScreenSmall(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleLinkClick = (event) => {
        // Close the sidebar after a short delay
        setTimeout(() => {
            closeSidebar();
        }, 300);
    };

    return (
        <header className={`flex-row-reverse ${isSidebarOpen ? 'scrolled' : ''}`}>
            <button
                className="nav-btn"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </button>
            <nav ref={navRef} className={isSidebarOpen ? 'responsive_nav' : ''}>
                {/* Add an onClick handler to each anchor link */}
                <a href="/" onClick={handleLinkClick}>Home</a>
                <a href="#About" onClick={handleLinkClick}>About</a>
                <a href="#Portfolio" onClick={handleLinkClick}>Portfolio</a>
                <a href="#Contact" onClick={handleLinkClick}>Contact</a>
                {/* Conditionally render the close button based on screen size */}
                {isSidebarOpen && isScreenSmall && (
                    <button
                        className="nav-close-btn"
                        onClick={closeSidebar}
                    >
                        {/* SVG icon for close */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 32 32"
                            width="30"
                            height="30"
                            fill="currentColor"
                        >
                            <path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"></path>
                        </svg>
                    </button>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
