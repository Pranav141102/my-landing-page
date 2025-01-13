"use client";

import { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins bg-[#FFFFFF] from-white to-blue-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between py-4 sm:py-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="flex items-center">
              <img src="/logo.png" alt="BrandNav" className="h-8 sm:h-12 w-auto" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-navy-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="#" className="text-navy-900 hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-navy-900 hover:text-blue-600 transition-colors">
            Blogs
          </Link>
          <Link href="#" className="text-navy-900 hover:text-blue-600 transition-colors">
            Resources
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/login"
            className="px-6 py-2 text-blue-600 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start for free
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
          Weapons to grow your Business
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Turbocharge your business growth. Our products help ignite sales and
          entrepreneurship.
        </p>
        <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-base font-medium">
          Start for free
        </button>
        <div className="mt-3 text-xs text-gray-500">
          No credit card required | ★★★★★ 4.8/5 G2 Rating
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        {/* Email Verifier */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
          <div className="w-24 h-24 relative">
            <img src="/chart.png" alt="Chart" />
            <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-green-600">
              5,689
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">Valid emails</p>
        </div>

        {/* Ecom Brands */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12l-4-4m0 0l-4 4m4-4v12"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-navy-900 mt-2">14.5M+</h2>
          <p className="text-sm text-gray-600">ecom brands</p>
        </div>

        {/* Deliverability */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-navy-900 mt-2">100%</h2>
          <p className="text-sm text-gray-600">deliverability</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
