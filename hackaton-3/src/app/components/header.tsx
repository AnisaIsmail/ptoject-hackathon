import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 px-4 py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
      
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png" 
            alt="Furniro Logo"
            width={80} 
            height={40} 
            className="object-contain"
          />
          <p className='font-extrabold text-3xl'>
            Furniro
          </p>
        </div>

        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a
              href="/"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/shop"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Shop"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-gray-700 hover:text-gray-500 transition duration-200"
              aria-label="Contact"
            >
              Contact
            </a>
          </li>
        </ul>

      
        <div className="flex items-center space-x-6">
          <a href="/search" className="text-gray-700 hover:text-gray-500">
            <IoIosSearch size={24}/>
          </a>
          <a href="/favorites" className="text-gray-700 hover:text-gray-500">
            <FaRegHeart size={24}/>
          </a>
          <a href="/cart" className="text-gray-700 hover:text-gray-500">
            <IoCartOutline size={24}/>
          </a>
          <a href="/profile" className="text-gray-700 hover:text-gray-500">
            <HiOutlineUser size={24}/>
          </a>
        </div>

 
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 hover:text-gray-500 focus:outline-none">
      
            <IoIosSearch size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;