import React from 'react';
import { Download } from "lucide-react";
import { Link } from 'react-router-dom';
import hero from '../assets/hero.jpg';
import resume from '../assets/Sangki_Jun_Resume.pdf';

const HeroSection = () => {
  return (
    <section className='relative w-full pb-10' data-aos='zoom-in-up'>
        <div className='absolute top-0 inset-x-0 h-64 flex items-start'>
            <div className='h-24 w-2/3 bg-linear-to-br from-[#0c7fac] blur-2xl invisible opacity-40'></div>
            <div className='h-20 w-3/4 bg-linear-to-r from-[#289eff] opacity-40 blur-2xl'></div>
        </div>
        <div className='w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative'>
            <div className='grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none mx-w-2xl md:max-w-3xl mx-auto'>
                <div className='lg:py-6'>
                    <div className='text-center lg:text-left'>
                        <h1 className='pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl'>
                            Hi, I'm{' '}
                            <span className='text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-200'>
                                Sangki
                            </span>
                            
                        </h1>
                    </div>
                    <p className='text-gray-300 pt-8 text-center lg:text-left max-auto max-w-xl'>
                        I am a 1.5 generation Korean-American who moved to the states in 2006 from South Korea. 
                        I received all primary education in Gainesville, Florida and graduated from the University 
                        of Florida in 2020. I also took a Coding Bootcamp at University of Central Florida and got an
                        Associate Degree in Programming and Analysis from Santa Fe College. Let's connect!
                    </p>
                    <div className='flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max lg:mx-0'>
                        <Link to='/contact' className='px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center items-center 
                        overflow-hidden'>
                            <span className='absolute inset-0 rounded-3xl bg-primary group-hover:scale-105 transition-all'/>
                            <span className='relative text-white'>
                                Contact Me
                            </span>
                        </Link>
                        <a href={resume} download='Sangki_Jun_Resume.pdf' className='border border-cyan-400 px-6 md:px-7 py-3 rounded-full relative group 
                            w-full sm:w-max flex justify-center items-center'>
                            <div className='hover:scale-105 transition-all flex items-center'>
                                <Download size={18} className='text-primary' />
                                <span className='pl-2 text-primary'>
                                    Download Resume
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='lg:h-full md:flex'>
                    <div className='flex w-full h-96 min-h-96 lg:min-h-[none] lg:w-full lg:h-full items-center relative'>
                        <div className='absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-linear-to-r opacity-25
                            from-[#0c64ac] to-primary blur-2xl'>
                        </div>
                        <div className='absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16
                            rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-lg border border-cyan-500'>
                            <img src={hero} alt="Hero Pic" width="500" height="auto" loading='lazy' className='w-full h-full
                                rounded-[30%_70%_70%_30%/30%_30%_70%_70%] object-cover'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;