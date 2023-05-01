import Link from "next/link";
import Image from "next/image";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import Button from "./Button";

export default function Navbar() {
  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "About Us",
      href: "#about-us",
    },
  ];

  return (
    <div className="py-5 fixed top-0 w-full left-1/2 -translate-x-1/2 bg-gradient-to-t from-transparent via-gray-900/50 to-gray-900 backdrop-blur-sm z-50">
      <nav className="container grid grid-cols-12 items-center text-white navbar">
        <Link
          href="#"
          className="md:col-span-2 col-span-11 flex items-center gap-3"
        >
          <Image src="logo/default.svg" width={52} height={34} alt="" />
          <p className="text-white font-bold italic text-2xl md:block hidden">
            Agenone
          </p>
        </Link>
        <ul className="md:flex items-center justify-center gap-10 col-span-8 hidden">
          <li>
            <a href="#home" className="p-2.5 active">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="p-2.5">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="p-2.5">
              Projects
            </a>
          </li>
          <li>
            <a href="#about-us" className="p-2.5">
              About Us
            </a>
          </li>
        </ul>

        <Button
          variant="sm"
          className="col-span-2 w-max justify-self-end hidden md:block"
        >
          <a href="#contact-us">Contact Us</a>
        </Button>

        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="w-8 h-8 border border-gray-50 rounded-lg flex md:hidden items-center justify-center flex-col gap-1 group active:bg-white transition-colors">
            <span className="w-4 h-px rounded-full bg-white group-active:bg-black transition-colors"></span>
            <span className="w-4 h-px rounded-full bg-white group-active:bg-black transition-colors"></span>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 p-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {navLinks.map((link, idx) => (
                <Menu.Item key={idx}>
                  {({ active }) => (
                    <a
                      href={link.href}
                      className={`${active ? "primary-400 text-white" : "text-gray-700"
                        } group flex w-full items-center rounded-md px-2 py-2 text-md transition-all`}
                    >
                      {link.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </div>
  );
}
