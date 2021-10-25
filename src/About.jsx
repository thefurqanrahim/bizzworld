import React from 'react';
import {} from 'react-router-dom';
import web from "../src/images/picture 4.jpg";
import Common from './common';
const About = () => {
    return (
        <>
           <Common name="Welcome to About page" 
           imgsrc={web} 
           visit="/contact" 
           btname="Contact Now" />
        </>
    );
};

export default About;
