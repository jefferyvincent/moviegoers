import React from 'react';

import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout: React.FC = ({children})=> {
    return (
        <div className="container">
            <Header />
            <main className="content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;