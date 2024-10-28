"use client";
import Link from "next/link";
import { useState } from "react";
import { SiSimpleanalytics } from "react-icons/si";
import { FiAward } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("skilltest");

  const navLinks = [
    { label: "Dashboard", link: "dashboard", icon: SiSimpleanalytics },
    { label: "Skill Test", link: "skilltest", icon: FiAward },
    { label: "Internship", link: "internship", icon: IoDocumentOutline },
  ];

  return (
    <div className="flex flex-col h-screen w-[240px] lg:w-[250px] transition-width duration-300 border-r-[1px] border-gray-200">
      <nav className="mt-8 space-y-4 py-2 pr-2">
        {navLinks.map((navLink, index) => (
          <NavItem
            label={navLink.label}
            link={navLink.link}
            icon={navLink.icon}
            key={index}
            isActive={activeLink === navLink.link}
            onClick={() => setActiveLink(navLink.link)}
          />
        ))}
      </nav>
    </div>
  );
};

const NavItem = ({ label, link, icon: Icon, isActive, onClick }) => (
  <Link
    href={link}
    onClick={onClick}
    className={`flex items-center px-4 py-4 rounded-r-full hover:bg-gray-50 ${
      isActive ? "text-blue-700 bg-gray-50" : "hover:text-blue-700"
    }`}
  >
    <Icon className="text-[1.2rem]" />
    <span className="ml-4 font-semibold hidden lg:inline">{label}</span>
  </Link>
);

export default Sidebar;
