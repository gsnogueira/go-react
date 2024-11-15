import React from 'react';
import style from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <p>&copy; {new Date().getFullYear()} Meli. todos os direitos reservados.</p>
            </div>
        </footer>
    );
};