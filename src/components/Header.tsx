import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';
import logo from '../img/logo.png';
import Search from './Search';

const Header: React.FC = () => {
    return (
        <header className="App-Header">
            <div className="Header-left">
                <Link to="/" title="Ultimate Moviegoers Guide">
                    <h1 className="Header-logo">
                        <img src={logo} alt="Ultimate Moviegoers Guide" />
                    </h1>
                </Link>
            </div>
            <div className="Header-right">
                <Search />
            </div>
        </header>
    );
}

export default Header;