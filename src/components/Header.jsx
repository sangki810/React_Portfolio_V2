import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Education & Certificates', path: '/education' },
    { name: 'About Me', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' }
  ];

  return (
    <header className='relative z-50 px-6 py-7'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>

        {/* Logo */}
        <Link
          to='/'
          className='text-white text-3xl font-black'
        >
          PORTFOLIO
          <span className='text-primary'>.</span>
        </Link>

        {/* Desktop */}
        <nav className='hidden md:flex items-center gap-10'>
            <ul className='flex gap-8'>
                {menuItems.map((item) => (
                    <li key={item.name}>
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                        `text-base
                        font-medium
                        transition-colors

                        ${
                            isActive
                            ? 'text-primary border-b-2 border-primary pb-1'
                            : 'text-gray-300 hover:text-white'
                        }
                        `
                        }
                    >
                        {item.name}
                    </NavLink>
                    </li>
                ))}
            </ul>

          <Link
            to='/contact'
            className='bg-primary hover:bg-primary/90
            text-white px-6 py-2.5 rounded-lg'
          >
            Contact Me
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className='md:hidden text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32}/> : <Menu size={32}/>}
        </button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black/60'
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#111827]
        transition-transform duration-300 z-50 p-8 md:hidden
        ${isMenuOpen
          ? 'translate-x-0'
          : 'translate-x-full'
        }`}
      >
        <button
          className='self-end text-white mb-10'
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32}/>
        </button>

        <ul className='flex flex-col gap-8'>
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `
                  text-xl
                  transition-colors
                  ${
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-white hover:text-primary'
                  }
                  `
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          <li>
            <Link
              to='/contact'
              onClick={() => setIsMenuOpen(false)}
              className='block w-full text-center
              bg-primary py-4 rounded-xl text-white'
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;