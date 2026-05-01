"use client";
import MyNavLink from "./MyNavLink";
import { Link, Button } from "@heroui/react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import Image from "next/image";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = false;
  return (
    <nav className="sticky top-0 z-40 shadow-sm bg-background/70 backdrop-blur-lg">
      <header className="flex items-center justify-between w-[85%] md:container mx-auto py-3 px-4">
        <div className="flex items-center gap-8">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={120} height={80} />
          </Link>
          <ul className="hidden items-center gap-4 md:flex">
            <li>
              <MyNavLink href={"/"}>Home</MyNavLink>
            </li>
            <li>
              <MyNavLink href={"/all-animals"}>All Animals</MyNavLink>
            </li>
          </ul>
        </div>

        {/* login , register */}
        <ul className="items-center gap-3 hidden md:flex">
          <li className="list-none py-2 px-3 text-xl">
            <Link href={"/login"}>Login</Link>
          </li>
          <li className="list-none py-2 px-3 text-xl">
            <Link href={"/register"}>Register</Link>
          </li>
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/all-animals"}>All Animals</Link>
            </li>
          </ul>
          
          {/* login , register */}
          <ul className="items-start flex border-t px-4 py-2 flex-col md:hidden">
            <li className="list-none  text-xl">
              <Link href={"/login"}>Login</Link>
            </li>
            <li className="list-none text-xl">
              <Link href={"/register"}>Register</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navber;
