import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Player() {
  return (
    <div>
      <Navbar />
      <div className='container mt-5'>
        <div className='w-100'>
          <ReactHlsPlayer
            src='https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
            // src='http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8'
            // src='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
            autoPlay={true}
            controls={true}
            width='80%'
            height='auto'
          />
        </div>
        <h4 className='text-white mt-2 mb-5 font-weight-bolder'>
          Big Buck Bunny
        </h4>
      </div>
      <hr></hr>
      <Footer />
    </div>
  );
}
