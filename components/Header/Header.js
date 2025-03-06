"use client";
import { HeaderNavLinks } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto flex items-center justify-between  px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              width={50}
              height={50}
              src="/andhra-pradesh-state--emblem-seeklogo.svg"
              alt="LogoSerp"
              className="h-auto w-60"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              width={50}
              height={50}
              src="/Text.svg"
              alt="LogoSerp"
              className="h-auto w-[500px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {HeaderNavLinks.map((link, index) => (
            <Link
              id={link.id}
              key={index}
              href={link.url}
              target={link.target}
              className="text-black font-medium hover:text-red-700"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col space-y-4 items-start px-6">
          {HeaderNavLinks.map((link, index) => (
            <Link
              id={link.id}
              key={index}
              href={link.url}
              className="text-black font-medium hover:text-red-700"
              onClick={() => setIsOpen(false)} // Close menu when a link is clicked
            >
              {link.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
