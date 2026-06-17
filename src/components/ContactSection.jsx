import React from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
    const contactInfo = [
        {
            id: 1,
            icon: FaEnvelope,
            title: 'Email',
            value: 'sangki810@gmail.com',
            link: 'mailto:sangki810@gmail.com'
        },
        {
            id: 2,
            icon: FaPhone,
            title: 'Phone',
            value: '+1 352 359 6713',
            link: 'tel:+13523596713'
        },
        {
            id: 3,
            icon: FaLinkedin,
            title: 'LinkedIn',
            value: 'linkedin.com/in/sangki-jun/',
            link: 'https://www.linkedin.com/in/sangki-jun/'
        },
        {
            id: 4,
            icon: FaMapMarkedAlt,
            title: 'Location',
            value: 'Gainesville, FL',
            link: null
        },
    ];

    return (
        <section className='py-20 bg-gray-900' id='contact'>
            <div className='container mx-auto px-4 max-w-6xl'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-2'>
                        Let's Connect
                    </h2>
                    <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'></div>
                </div>
                <div className='grid md:grid-cols-2 gap-8'>
                    <div data-aos='fade-right'>
                        <p className='text-gray-400 mb-8 leading-relaxed'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua.
                        </p>
                        <div className='space-y-6'>
                            {contactInfo.map((info) => {
                                const Icon = info.icon;
                                return (
                                    <div key={info.id} className='flex items-center gap-4 group'>
                                        <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center
                                            group-hover:bg-primary/20 transition-colors'>
                                            <Icon size={18} className='text-primary' />
                                        </div>
                                        <div>
                                            <h4 className='text-white font-medium text-sm'>
                                                {info.title}
                                            </h4>
                                            {info.link ? (
                                                <a href={info.link} className='text-gray-400 text-sm hover:text-primary transition-colors'
                                                    target={info.title === 'Location' ? '_self' : '_blank'} 
                                                    rel={info.title === 'Location' ? '' : 'noopener noreferrer'}>
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className='text-gray-400 text-sm'>
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className='bg-gray-800 rounded-lg p-6' data-aos='fade-left'>
                        <form>
                            <div className='mb-4'>
                                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
                                    Email
                                </label>
                                <input type="email" id='email' className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg
                                    text-white text-sm focus:outline-none focus:border-primary transition-colors' placeholder='your@gmail.com'
                                    required />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>
                                    Message
                                </label>
                                <textarea id='message' className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg
                                    text-white text-sm focus:outline-none focus:border-primary transition-colors' placeholder='Your Message ....'
                                    rows={4} required></textarea>
                            </div>
                            <button type='submit' className='w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;