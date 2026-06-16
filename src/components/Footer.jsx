import React from 'react';

const Footer = () => {
  return (
    <footer className='mt-8'>
      <div className='w-full flex justify-center items-center py-6'>
        <p className='text-slate-600 text-sm md:text-base text-center'>
          Sangki Bryan Jun &copy; All Rights Reserved {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;