import React from 'react';
import Title from '../components/Title.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

const NotFound = () => (
    <section id="app">
        <section className="top" style={{ backgroundColor: '#39D08A' }}>
            <Title content="Whoops!" bgColor="#39D08A" />
            <Nav
                className="hide-on-mobile desktop-nav"
                bgColor="#39D08A"
                showDesktop="true"
                showMobile="false"
            />
        </section>
        <main>
            <article id="not-found">
                <h3>Not Found</h3>
                <p>We're sorry - we cannot find this page.</p>
            </article>
        </main>
        <section 
            className="mobile-nav hide-on-desktop" 
            style={{ backgroundColor: '#39D08A'}}
        >
            <Nav 
                bgColor='#39D08A'
            />
        </section>
        <Footer />
    </section>
)

export default NotFound;