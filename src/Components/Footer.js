import React from 'react';
import "../Styles/footer.css";
import gitIcon from '../Assets/git.png';
import linkedinIcon from '../Assets/linkedin.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '40vh' }}>
            {/* <h3>Connect</h3> */}
            <div className="social-icons">
                <a href="https://github.com/xiaoyunbonato" target="_blank" rel="noopener noreferrer">
                    <img src={gitIcon} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/xiaoyunbonato/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
            </div>
            <p>&copy; {currentYear} Xiaoyun Bonato</p>
        </footer>
    );
}

export default Footer;
