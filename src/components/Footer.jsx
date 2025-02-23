import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <p>© {new Date().getFullYear()} All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
