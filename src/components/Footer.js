import React from 'react';

export default function Footer() {
    return (
        <footer className="footer-section-wrapper">
            <p className="footer-text">
                © {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.com">Gatsby</a>
            </p>
        </footer>
    );
}