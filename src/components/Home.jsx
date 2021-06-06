import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';
import RailsSection from './RailsSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='container-fluid'>
        <Banner />
      </div>
      <div className='container'>
        <RailsSection />
      </div>
      <div className='footer'>
        <hr></hr>
        <Footer />
      </div>
    </div>
  );
}
