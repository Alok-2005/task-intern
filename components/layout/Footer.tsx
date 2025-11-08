import Link from 'next/link';
import { GraduationCap, Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-emerald-500" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  thinkplus
                </span>
                <span className="text-xs text-gray-400">An IIM Grads Initiative</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Empowering MBA aspirants with expert guidance, comprehensive courses, and proven strategies for success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/mentors" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Mentors
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Free Resources
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cat-preparation" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  CAT Preparation
                </Link>
              </li>
              <li>
                <Link href="/gmat-preparation" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  GMAT Preparation
                </Link>
              </li>
              <li>
                <Link href="/mba-interview" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  MBA Interview Prep
                </Link>
              </li>
              <li>
                <Link href="/gd-pi-wat" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  GD-PI-WAT
                </Link>
              </li>
              <li>
                <Link href="/profile-building" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Profile Building
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>contact@thinkpluseducation.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 ThinkPlus Education. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
