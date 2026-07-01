import React from 'react';
import educ from '../assets/educ.png';
import { GraduationCap, Calendar, CheckCircle, Award, ShieldCheck, ExternalLink } from "lucide-react";

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: 'Associate of Science in Programming and Analysis',
            institution: 'Santa Fe College',
            duration: 'Aug 2024 - May 2026',
            details: 'The program offered hands-on training and extensive experience in a wide variety of areas. Students learned various programming languages, including C++, C#, MySQL, JavaScript, Java and Python. Students also learned the latest versions of HTML, CSS, and other scripting languages.'
        },
        {
            id: 2,
            degree: 'Bachelor of Science in Psychology',
            institution: 'University of Florida',
            duration: 'Aug 2016 - May 2020',
            details: 'Majored in Psychology as a Pre-Med student and took all the required science classes. This includes Chemistry, Organic Chemistry, Biology, Microbiology, Genetics, Physics, Statistics and more.'
        },
    ];
    const certificates = [
        {
            id: 1,
            title: 'Certificate in Full Stack Web Development',
            issuer: 'University of Central Florida',
            date: 'Sep 2022 - Dec 2022',
            link: 'https://badges.parchment.com/public/assertions/p_SYcLxFSXqNw4nQxUGaGg',
            desc: 'A 12-week program with 240 contact hours plus individual and group projects utilizing HTML/CSS, Javascript, third-party APIs (jQuery, Bootstrap), API Consumption, Git, MySQL, Node.js, Authentication, ORM, Template Engines, and Express.js.',
        },
    ];
    return (
        <section className='text-white pt-10 pb-0 overflow-hidden' id='education'>
            <div className='max-w-7xl mx-auto px-6 lg:px-16'>
                <div className='mb-16'>
                    <p className='text-primary text-sm uppercase tracking-widest
                        font-semibold'>
                        Learning Path
                    </p>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                        Education.
                    </h2>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-16'>
                    <div className='w-full lg:w-5/12 flex justify-center lg:justify-start'
                        data-aos='fade-right'>
                        <div className='relative md:w-96 md:h-96'>
                            <div className='absolute h-full w-full z-0 p-2 translate-x-4 translate-y-4
                                rounded-2xl shadow-lg border border-cyan-500'>
                            </div>
                            <div className='relative z-10 bg-[#111a3e] rounded-2xl overflow-hidden border
                                border-[#1f1641]'>
                                <img src={educ} alt="Education" className='w-64 h-64 md:w-96 md:h-96 object-cover
                                    transform transition-transform duration-500 hover:scale-110' />
                            </div>
                            <div className='absolute -top-4 -left-4 bg-primary/20 w-16 h-16 rounded-full blur-2xl'></div>
                        </div>
                    </div>
                    <div className='w-full lg:w-7/12 space-y-6' data-aos='fade-left'>
                        {educationData.map((edu) => (
                            <div key={edu.id} className='group relative p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641]
                                transition-all duration-300 hover:border-primary/50'>
                                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4'>
                                    <div className='flex items-center gap-3'>
                                        <div className='p-2 bg-[#050816] rounded-lg border border-primary/20 group-hover:border-primary
                                            transition-colors'>
                                            <GraduationCap className='text-primary' size={24} />
                                        </div>
                                        <div>
                                            <h3 className='text-lg font-bold text-white group-hover:text-primary transition-colors'>
                                                {edu.degree}
                                            </h3>
                                            <p className='text-gray-400 text-sm'>
                                                {edu.institution}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs font-medium bg-[#050816] px-3 py-1 rounded-full border
                                        border-gray-700 w-fit'>
                                        <Calendar size={12} className='text-primary' />
                                        <span className='min-w-[118px]'>{edu.duration}</span>
                                    </div>
                                </div>
                                <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                                    {edu.details}
                                </p>
                                <div className='flex items-center gap-2 text-[10px] uppercase-widder text-primary font-bold'>
                                    <CheckCircle size={12} />
                                    Academic Excellence
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='text-white pt-20'>
                <div className='max-w-7xl mx-auto px-6 lg:px-16'>
                    <div className='mb-16'>
                        <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'>
                            Achievements
                        </p>
                        <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                            Certifications.
                        </h2>
                    </div>
                    <div className='grid grid-cols-1 gap-6'>
                        {certificates.map((cert) => (
                            <div key={cert.id} data-aos='zoom-in' className='group relative bg-[#111a3e] border
                                border-[#1f1641] p-6 rounded-2xl transition-all duration-300 hover:border-primary/50
                                hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]'>
                                <div className='absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg transform
                                    group-hover:rotate-12 transition-transform'>
                                    <Award className='text-white' size={24} />
                                </div>
                                <div className='flex items-center gap-4 mb-4 text-xs text-gray-400'>
                                    <span className='flex items-center gap-1'>
                                        <ShieldCheck size={14} className='text-primary' />
                                        {cert.issuer}
                                    </span>
                                    <span className='flex items-center gap-1'>
                                        <Calendar size={14} />
                                        {cert.date}
                                    </span>
                                </div>
                                <h3 className='text-xl font-bold mb-3 group-hover:text-primary transition-colors'>
                                    {cert.title}
                                </h3>
                                <p className='text-gray-400 text-sm mb-6 line-clamp-2'>
                                    {cert.desc}
                                </p>
                                <a href={cert.link} target='_blank' rel='noopener noreferrer' className='inline-flex items-center
                                    gap-2 text-sm font-medium text-primary hover:text-white transition-colors border-b border-transparent
                                    hover:border-white pb-1'>
                                    View Certificate <ExternalLink size={14} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;