"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-2 z-50 bg-white shadow-md py-2 rounded-full mx-auto mt-4 max-w-[1200px] mx-auto px-4 justify-between sm:px-6 lg:px-8 items-center">
      
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="BrandNav" width={120} height={40} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center gap-2 text-[#1E293B] hover:text-[#0D6EFD] transition-colors">
              Products
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <Link
            href="/pricing"
            className="text-[#0085FF] hover:text-[#0D6EFD] transition-colors"
          >
            Pricing
          </Link>

          <Link
            href="/blogs"
            className="text-[#1E293B] hover:text-[#0D6EFD] transition-colors"
          >
            Blogs
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-2 text-[#1E293B] hover:text-[#0D6EFD] transition-colors">
              Resources
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className="px-5 py-2 text-[#0D6EFD] border border-[#0D6EFD] rounded-full hover:bg-blue-50 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 text-white bg-gradient-to-r from-[#0D6EFD] to-[#004aad] rounded-full hover:opacity-90 transition-opacity"
          >
            Start for free
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md rounded-lg mt-2">
          <div className="p-4 space-y-4">
            <Link href="/products" className="block py-2 text-[#1E293B]">
              Products
            </Link>
            <Link href="/pricing" className="block py-2 text-[#0085FF]">
              Pricing
            </Link>
            <Link href="/blogs" className="block py-2 text-[#1E293B]">
              Blogs
            </Link>
            <Link href="/resources" className="block py-2 text-[#1E293B]">
              Resources
            </Link>
            <div className="pt-4 space-y-2">
              <Link
                href="/login"
                className="block w-full px-6 py-2 text-center text-[#0D6EFD] border border-[#0D6EFD] rounded-full hover:bg-blue-50 transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="block w-full px-6 py-2 text-center text-white bg-gradient-to-r from-[#0D6EFD] to-[#004aad] rounded-full hover:opacity-90 transition-opacity"
              >
                Start for free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
