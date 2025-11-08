'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <GraduationCap className="h-8 w-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                thinkplus
              </span>
              <span className="text-xs text-gray-600">An IIM Grads Initiative</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/courses"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Courses
            </Link>
            <Link
              href="/mentors"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Mentors
            </Link>
            <Link
              href="/success-stories"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Success Stories
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-emerald-600">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/courses"
              className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Courses
            </Link>
            <Link
              href="/mentors"
              className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Mentors
            </Link>
            <Link
              href="/success-stories"
              className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Success Stories
            </Link>
            <Link
              href="/resources"
              className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              About
            </Link>
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
