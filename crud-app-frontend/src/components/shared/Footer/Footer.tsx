import React from 'react';
import style from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <p>&copy; {new Date().getFullYear()} Meli. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;