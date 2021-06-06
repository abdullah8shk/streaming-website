import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className='notFound d-flex flex-column justify-content-around text-white align-items-center mt-5'>
        <h2>COMING SOON</h2>
        <div
          style={{ width: '4rem', height: '4rem' }}
          className='spinner-border ml-auto'
          role='status'
          aria-hidden='true'></div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}
