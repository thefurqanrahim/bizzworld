import React from 'react';
import {} from 'react-router-dom';
import web from "../src/images/picture 4.jpg";
import Common from './common';
const Home = () => {
    return (
        <>
     <Common name="Grow your Buisness with" 
      imgsrc={web} 
      visit="/service" 
      btname="Get Started" />
        </>
    );
};

export default Home;