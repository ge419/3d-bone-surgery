import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface DropdownProps {
  title: string;
  items: { label: string; link: string }[];
}

const Dropdown = ({ title, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  let closeTimeout: NodeJS.Timeout;

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      closeDropdown();
    }
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      closeDropdown();
    }, 2000);
  };

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(closeTimeout);
    };
  });

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className="text-[17px] cursor-pointer hover:text-blue-500 transition-all duration-200 flex items-center"
      >
        {title}
        <svg
          className={`w-4 h-4 ml-1 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md z-10">
          <ul className="flex flex-col space-y-1 p-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:bg-gray-100 rounded-md"
              >
                <Link
                  href={item.link}
                  className="block px-4 py-2 text-[15px] hover:text-blue-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
