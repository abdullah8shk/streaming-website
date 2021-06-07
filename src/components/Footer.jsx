import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Google,
  Instagram,
  Linkedin,
  Github,
} from '../Icons/SvgIcons';

export default function Footer() {
  return (
    <footer className='text-center text-white'>
      <div className='container pt-4'>
        <section className='mb-4'>
          <Link
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            to='/facebook'
            role='button'
            data-mdb-ripple-color='dark'>
            <Facebook />
          </Link>

          <Link
            className='btn btn-link btn-floating btn-lg text-white m-1'
            to='/twitter'
            role='button'
            data-mdb-ripple-color='white'>
            <Twitter />
          </Link>

          <Link
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            to='/google'
            role='button'
            data-mdb-ripple-color='dark'>
            <Google />
          </Link>

          <Link
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            to='/instagram'
            role='button'
            data-mdb-ripple-color='white'>
            <Instagram />
          </Link>

          <Link
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            to='/linkedin'
            role='button'
            data-mdb-ripple-color='dark'>
            <Linkedin />
          </Link>
          <Link
            className='btn btn-link btn-floating btn-lg text-dark m-1 d-none d-sm-inline'
            to='/github'
            role='button'
            data-mdb-ripple-color='dark'>
            <Github />
          </Link>
        </section>
      </div>

      <div
        className='text-center text-white p-3'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <Link className='text-white' to='/'>
          Netflix.com
        </Link>
      </div>
    </footer>
  );
}
