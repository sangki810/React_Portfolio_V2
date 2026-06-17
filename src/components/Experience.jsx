import React from 'react';
import { Layout, Cpu, Terminal, Layers, Briefcase, Building, Calendar } from 'lucide-react';

const Experience = () => {
    const Experiences = [
        {
            id: 1,
            role: 'Part-Time Assistant',
            company: 'Scissor Warrior',
            date: 'Apr 2022 - Present'
        },
        {
            id: 2,
            role: 'Student Volunteer',
            company: 'Malcolm Randall Veterans Hospital',
            date: 'Sep 2019 - Mar 2020'
        },
        {
            id: 3,
            role: 'Student Assistant Librarian',
            company: 'Education Library @ UF',
            date: 'June 2017 - Jan 2019'
        },
    ]
    return (
        <section className='text-white py-20 relative overflow-hidden' id='skills'>
            <div className='max-w-7xl mx-auto px-6 lg:px-16 relative z-10'>
                <div data-aos='fade-up'>
                    <h2 className='text-3xl md:text-5xl font-extrabold mb-12'>
                        Work <span className='text-primary'>Experience</span>
                    </h2>
                    <div className='space-y-6'>
                        {Experiences.map((exp) => (
                            <div key={exp.id} className='group relative p-6 rounded-2xl bg-[#1f1641] hover:border-primary/50
                                transition-all duration-300'>
                                <div className='flex gap-4'>
                                    <div className='shrink-0 mt-1'>
                                        <div className='p-3 bg-[#050816] rounded-xl border border-gray-800 group-hover:border-primary
                                            transition-colors'>
                                            <Briefcase className='text-primary' size={24} />
                                        </div>
                                    </div>
                                    <div className='grow'>
                                        <h3 className='text-xl font-bold text-white group-hover:text-primary transition-colors'>
                                            {exp.role}
                                        </h3>
                                        <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-400'>
                                            <span className='flex items-center gap-1.5'>
                                                <Building size={14} className='text-primary' />
                                                {exp.company}
                                            </span>
                                            <span className='flex items-center gap-1.5'>
                                                <Calendar size={14} className='text-primary' />
                                                {exp.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;