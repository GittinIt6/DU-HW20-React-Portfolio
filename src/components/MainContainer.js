import React, { useState } from 'react';
import About from './pages/About';
import Nav from './Nav';
import Footer from './pages/Footer';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const MainContainer = () => {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        };
        if (currentPage === 'Work') {
            return <Work />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        };
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        //TODO: Place logic in here for nav.
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
};

export default MainContainer;