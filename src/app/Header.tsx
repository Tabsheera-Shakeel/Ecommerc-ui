"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4">
      {/* Logo Section */}
      <div className="flex items-center ml-2">
        <Image src="/WhatsApp Image 2024-10-11 at 00.11.56_b861a94a.jpg" width={100} height={100} alt="Logo" />
      </div>

      {/* Navigation Menu */}
      <nav className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row`}>
        <ul className="flex flex-col md:flex-row justify-center gap-5 text-2xl">
          <li key="home">
            <Link
              href="/"
              className="hover:bg-yellow-400 transition-colors duration-300 p-2 rounded"
            >
              Home
            </Link>
          </li>
          <li key="about">
            <Link
              href="#About"
              className="hover:bg-yellow-400 transition-colors duration-300 p-2 rounded"
            >
              About
            </Link>
          </li>
          <li key="category">
            <Link
              href="#Clothes"
              className="hover:bg-yellow-400 transition-colors duration-300 p-2 rounded"
            >
              Category
            </Link>
          </li>
          
          <li key="contact">
            <Link
              href="#Footer"
              className="hover:bg-yellow-400 transition-colors duration-300 p-2 rounded"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <div className="flex md:hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
          width={30}
          height={30}
          alt="Menu"
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>

      {/* Icons Section */}
      <div className="flex gap-5 mt-2 mr-5 md:mt-0">
        <Image
          src="https://cdn-icons-png.freepik.com/512/1413/1413908.png"
          width={20}
          height={20}
          alt="Search Icon"
        />
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aKJ9AbwvP0MGcEyOeOw_4XGgMktjq1WMsA&s"
          width={20}
          height={20}
          alt="Notification Icon"
        />
      </div>
    </header>
  );
}

export default Header;
