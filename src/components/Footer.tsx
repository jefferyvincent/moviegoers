import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const date = new Date();

    return (
        <footer className="footer">
            <hr />
            <div className="copyright">&copy; {date.getFullYear()} Ultimate Moviegoers Guide</div>
        </footer>
    )
}

export default Footer;