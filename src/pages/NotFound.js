import React from 'react';
import Title from '../components/Title.js';
import Footer from '../components/Footer.js';

const NotFound = () => (
    <>
        <Title />
        <main>
            <article id="not-found">
                <h3>Not Found</h3>
                <p>We're sorry - we cannot find this page.</p>
            </article>
        </main>
        <Footer />
    </>
)

export default NotFound;