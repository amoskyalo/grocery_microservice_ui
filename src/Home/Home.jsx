import React from 'react';
import CheapProduct from '../CheapProduct/CheapProduct';
import Filter from '../Filter/Filter';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
  return (
   <>
  <Navbar/>
   <Hero/>
   <Filter/>
   <Products/>
   <CheapProduct/>
   <Footer/>
   </>
  )
}

export default Home