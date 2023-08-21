import React from 'react';
import gitHubImg from './assets/github.png'; 
import linkedInImg from './assets/linkedIn.webp';

function TopNav({ page, pageContentHandler }) {
    const linkState = (pageName) => {
        return page === pageName ? 'tabs active' : 'tabs';
    };

    return (
        <ul className="flex justify-between p-4 bg-gray-800">
            <li className="tab-items">
                <a
                    href="#about"
                    onClick={() => pageContentHandler('About Me')}
                    className={linkState('About Me') + ' px-4 py-2 text-white'}
                >About me
                </a>
            </li>
            <li className="tab-items">
                <a
                    href="#portfolio"
                    onClick={() => pageContentHandler('Portfolio')}
                    className={linkState('Portfolio') + ' px-4 py-2 text-white'}
                >Portfolio
                </a>
            </li>
            <li className="tab-items">
                <a
                    href="#contact"
                    onClick={() => pageContentHandler('Contact')}
                    className={linkState('Contact') + ' px-4 py-2 text-white'}
                >Contact
                </a>
            </li>
            <li className="tab-items">
                <a
                    href="#resume"
                    onClick={() => pageContentHandler('Resume')}
                    className={linkState('Resume') + ' px-4 py-2 text-white'}
                >Resume
                </a>
            </li>
        </ul>
    );
}

function Header() {
    return (
        <h1 className="text-3xl font-semibold text-center mt-4">Kole Lam</h1>
    );
}

function Footer() {
    return (
        <section className="footer-items flex justify-center mt-8 bg-gray-800 p-4">
            <div className="footer-links mx-4">
                <a href="https://github.com/kolelam?tab=repositories" target='_blank' rel='noopener noreferrer'>
                    <img src={gitHubImg} alt='GitHub link' width='50' height='50' />
                </a>
            </div>
            <div className="footer-links mx-4">
                <a href="https://www.linkedin.com/in/kole-lam-0329a91a9/" target='_blank' rel='noopener noreferrer'>
                    <img src={linkedInImg} alt='LinkedIn link' width='50' height='50' />
                </a>
            </div>
        </section>
    );
}

export { TopNav, Header, Footer };
