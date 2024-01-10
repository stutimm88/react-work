import React from 'react';
import Navbar from './navbar';
import Header from './Header';
import Working from "./Working";
import Aboutus from "./Aboutus";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Working />
    <Aboutus/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App
