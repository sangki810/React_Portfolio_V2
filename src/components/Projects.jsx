import React from 'react';
import LockBox from '../assets/lock-box.png';
import Postal from '../assets/us-postal-printing.png';
import Cinema from '../assets/cinemafiles-by-cinemaphiles.png';
import Blog from '../assets/tech-blog.png';
import Jate from '../assets/module-19-challenge-jate.jpg';
import Finder from '../assets/Game-Finder.jpg';
import Weather from '../assets/weather-dashboard.jpg';
const Projects = () => {
    const projects = [
        {
            id: 1,
            image: LockBox,
            title: 'LockBox',
            desc: 'A secure, portable password manager that works on Windows, Mac, and Linux',
            tech: ['Flask', 'Python', 'SQLite'],
            url: 'https://github.com/0ff-by-0ne/LockBox',
        },
        {
            id: 2,
            image: Postal,
            title: 'US Posta & Printing',
            desc: 'US Postal & Printing is a full stack MERN web app that serves as an information page for the company US Postal & Printing',
            tech: ['MongoDB', 'Express', 'React', 'Node.js', 'GraphQL'],
            url: 'https://github.com/Mateo-Wallace/US-Postal-Printing',
        },
        {
            id: 3,
            image: Cinema,
            title: 'CINEMAfiles',
            desc: 'This immersive app calls all cinema and devoted movie lovers to lookup their favorite cinema title',
            tech: ['Node.js', 'Express', 'MySQL', 'Sequelize'],
            url: 'https://github.com/sangki810/Project-2-The-Cinemaphiles',
        },
        {
            id: 4,
            image: Blog,
            title: 'Tech Blog',
            desc: 'A full stack web application that allows users to make social media posts and comment on other posts',
            tech: ['Express', 'MySQL', 'Node.js'],
            url: 'https://github.com/sangki810/Module-14-Challenge-Tech-Blog-by-Sangki-Jun',
        },
        {
            id: 5,
            image: Jate,
            title: 'JATE - Just Another Text Editor',
            desc: 'A web app that allows users to save notes and view them at a later time',
            tech: ['Express', 'Node.js'],
            url: 'https://github.com/sangki810/Module-11-Challenge-Note-Taker-by-Sangki-Jun',
        },
        {
            id: 6,
            image: Finder,
            title: 'Game Finder',
            desc: 'A game finder site that fetches an image, description, platforms, genres, and a youtube video of the game title that is searched',
            tech: ['API'],
            url: 'https://github.com/IanMosur06/Project-1-Game-Finder',
        },
        {
            id: 7,
            image: Weather,
            title: 'Weather Dashboard',
            desc: 'This functions as a weather dashboard for any city that is looked up within the search bar',
            tech: ['Bootstrap', 'API'],
            url: 'https://github.com/sangki810/Module-6-Challenge-Weather-Dashboard-by-Sangki-Jun',
        },
    ]
    return (
        <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className='py-13 bg-gray-900' id='projects'>
            <div className='container mx-auto px-4 max-w-7xl'>
                <div className='text-center mb-10'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                        Projects.
                    </h2>
                    <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {projects.map((project) => (
                        <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className='bg-gray-800 rounded-lg overflow-hidden
                            shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300'>
                            <img src={project.image} loading='lazy' alt={project.title} className='w-full h-44 object-cover
                                hover:opacity-90 transition-opacity duration-300' />
                            <div className='p-4'>
                                <h3 className='text-lg font-semibold text-white group-hover:text-primary transition-colors'>
                                    {project.title}
                                </h3>
                                <p className='text-gray-400 text-sm mt-1'>
                                    {project.desc}
                                </p>
                                <div className='flex flex-wrap gap-1.5 mt-3'>
                                    {project.tech.map((tec, idx) => (
                                        <span key={idx} className='text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded hover:bg-primary
                                            hover:text-white transition-colors duration-300'>
                                            {tec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;