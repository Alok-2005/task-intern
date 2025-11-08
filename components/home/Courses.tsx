'use client';

import { Button } from '@/components/ui/button';
import { Clock, Users, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: 'CAT Complete Preparation',
      description: 'Comprehensive course covering all sections with live classes, study material, and mock tests.',
      price: '29,999',
      originalPrice: '49,999',
      duration: '6 months',
      students: '5,000+',
      rating: 4.9,
      features: [
        'Live classes with IIM mentors',
        '100+ recorded video lectures',
        '50+ full-length mock tests',
        'Personalized doubt clearing',
        'Study material & notes',
      ],
      badge: 'Most Popular',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'GMAT Mastery Program',
      description: 'Expert-led program designed to help you score 700+ in GMAT with proven strategies.',
      price: '34,999',
      originalPrice: '54,999',
      duration: '4 months',
      students: '2,000+',
      rating: 4.8,
      features: [
        'Verbal & Quant mastery',
        'AWA & IR preparation',
        'Official GMAT mocks',
        'Score improvement guarantee',
        'Application essay guidance',
      ],
      badge: 'Best Value',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'GD-PI-WAT Bootcamp',
      description: 'Intensive program to crack group discussions, personal interviews, and written tests.',
      price: '14,999',
      originalPrice: '24,999',
      duration: '2 months',
      students: '3,500+',
      rating: 4.9,
      features: [
        'Mock GD & PI sessions',
        'Current affairs coverage',
        'Communication skills training',
        'Personality development',
        'Resume building workshop',
      ],
      badge: 'Quick Start',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Premium Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted programs designed by IIM graduates to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {course.badge && (
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${course.color} text-white px-4 py-1 rounded-full text-sm font-semibold z-10`}>
                  {course.badge}
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>

                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">₹{course.price}</span>
                  <span className="ml-2 text-xl text-gray-400 line-through">₹{course.originalPrice}</span>
                </div>

                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-emerald-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-emerald-600" />
                    {course.students}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500 fill-yellow-500" />
                    {course.rating}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <ul className="space-y-3">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white h-12 text-base font-semibold group`}>
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50">
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
