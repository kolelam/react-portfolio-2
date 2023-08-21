import React, { useState } from 'react';
import AboutMe from './About';
import Contact from './ContactTab';
import Portfolio from './Portfolio';
import Resume from './Resume';
import { TopNav, Header, Footer } from './CommonBars';

// Combines all of the pages and sets nav bar and page content based on the nav link clicked
export default function PortfolioPages() {
    const [page, setPage] = useState('About Me');

    // When the nav link is clicked, it will return the value of the link
    const pageContentHandler = (page) => setPage(page);

    // The nav link value is associated with the page contents in this map.
    const componentPageMap = {
        'About Me': <AboutMe />,
        'Portfolio': <Portfolio />,
        'Contact': <Contact />,
        'Resume': <Resume />,
    };

    // Returns the page content based on the clicked nav link, otherwise it sets it to the About Me page.
    const showPageContent = () => {
        return componentPageMap[page] || <AboutMe />;
    };

    return (
        <div className="container">
            <header className="header">
                <Header />
                <nav className="navbar">
                    <TopNav page={page} pageContentHandler={pageContentHandler} />
                </nav>
            </header>
            <h2 className='main-page-header'>
                {page}
            </h2>
            <main className="content">{showPageContent()}</main>
            <footer className="foot">
                <Footer />
            </footer>
        </div>
    );
}