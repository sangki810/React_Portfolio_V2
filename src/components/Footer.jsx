import React from 'react';

const Footer = () => {
    return (
        <footer className='mt-8 border-t z-10 border-t-[#33353F] border-l-transparent
            border-r-transparent text-white'>
            <div className='container p-4 md:p-12 justify-between flex flex-col md:flex-row 
                items-center'>
                <div className='text-white text-2xl md:text-3xl font-black cursor-pointer gap-4 md:gap-0'>
                    PORTFOLIO<span className='text-primary'>.</span>
                </div>
                <p className='text-slate-600 text-sm md:text-base'>
                    &copy; All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;