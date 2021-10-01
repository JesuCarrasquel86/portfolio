import React from 'react'
import { Link } from "react-router-dom";
import { Description } from '../components/AboutMe/Description'
import { Header } from '../components/AboutMe/Header'
import { Skills } from '../components/AboutMe/Skills';
import { Services } from '../components/AboutMe/Services';
import { Form } from '../components/AboutMe/Form';
import { Contact } from '../components/AboutMe/Contact';
import { Footer } from '../components/AboutMe/Footer';

import close from '../assets/img/close.png';

export const AboutMe = () => {
    return (
        <>
            <Header />
            <Description />
            <Skills />
            <Services />
            <Form />
            <Contact />
            <Footer />
            <Link to='/'>
                <img src={close} className="bl-icon bl-icon-close" alt="close" />
            </Link>
        </>
    )
}
