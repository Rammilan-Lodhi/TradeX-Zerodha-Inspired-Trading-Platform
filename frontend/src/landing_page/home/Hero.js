import React from 'react';
import { useNavigate } from 'react-router-dom';
function Hero() {
  const navigate = useNavigate();
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img
          src='media/images/homeHero.png'
          alt='Hero Image'
          className='mb-5'
        />
        <h1 className='mt-5 fs-3'>Explore the Stock Market</h1>
        <p className='fs-5'>
          Explore stocks, derivatives, mutual funds, and other investment
          opportunities through one convenient platform.
        </p>
        <button
          className='p-2 btn btn-primary fs-5 mb-5'
          style={{ width: '20%', margin: '0 auto' }}
          onClick={() => navigate('/signup')}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
