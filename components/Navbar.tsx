"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <header className="flex flex-col lg:flex-row justify-between items-center my-5">
        <div className="flex w-full lg:w-auto items-center justify-between relative z-20">
          <a href="/landing">
            <img
              src=""
              alt="logo"
              width="116"
              height="40"
              loading="lazy"
              decoding="async"
            />
          </a>
          <div className="block lg:hidden">
            <button className="text-neutral-800" onClick={toggleMenu}>
              {isMenuOpen ? (
                <svg
                  fill="currentColor"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Close</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                </svg>
              ) : (
                <svg
                  fill="currentColor"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>

                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <nav
          className={`w-full lg:w-auto lg:flex absolute lg:static bg-white top-0 mt-4 px-5 pb-5 pt-12 shadow-2xl lg:shadow-none lg:p-0 z-10 ${
            isMenuOpen ? "z-30" : "z-10"
          } ${isMenuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-10">
            <li>
              <a
                href="/pricing"
                className="flex lg:px-3 py-2 text-neutral-600 hover:text-neutral-900 text-bold"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/guide"
                className="flex lg:px-3 py-2 text-neutral-600 hover:text-neutral-900 text-bold"
              >
                Guide
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="flex lg:px-3 py-2 text-neutral-600 hover:text-neutral-900 text-bold"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className="py-2 text-neutral-600 hover:text-blue-900 text-sm "
            >
              Log in
            </a>
            <a
              href="#"
              className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-neutral-200 px-4 py-2 text-sm bg-black text-white hover:bg-neutral-800  border-2 border-transparent"
            >
              Register
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
