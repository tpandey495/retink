import React from 'react';
import './App.css';
import Header from './Components/Header';
import Video from './Components/Video';
import Card from './Components/Card';
import SecondCard from './Components/SecondCard';
import Signup from './Components/Singup';
import Footer from './Components/Footer';


const  App=()=> {
return (
    <>
    <Header />
    <Video />
    <Card />
    <SecondCard />
    <Signup />
    <Footer />
    </>
);
};

export default App;
