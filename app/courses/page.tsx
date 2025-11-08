'use client';

import { Button } from '@/components/ui/button';
import { Clock, Users, Star, CheckCircle2, ArrowRight, BookOpen, Video, FileText, Award } from 'lucide-react';

export default function CoursesPage() {
  const courses = [
    {
      title: 'CAT Complete Preparation',
      description: 'Comprehensive course covering all sections with live classes, study material, and mock tests designed to help you score 99+ percentile.',
      price: '29,999',
      originalPrice: '49,999',
      duration: '6 months',
      students: '5,000+',
      rating: 4.9,
      features: [
        'Live classes with IIM mentors',
        '100+ recorded video lectures',
        '50+ full-length mock tests',
        'Personalized doubt clearing sessions',
        'Comprehensive study material & notes',
        'Section-wise tests & practice',
        'Performance analytics dashboard',
        'Peer learning community',
      ],
      highlights: [
        { icon: BookOpen, text: '500+ Hours Content' },
        { icon: Video, text: '100+ Live Sessions' },
        { icon: FileText, text: '50+ Mock Tests' },
        { icon: Award, text: '99.5% Avg Score' },
      ],
      badge: 'Most Popular',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'GMAT Mastery Program',
      description: 'Expert-led program designed to help you score 700+ in GMAT with proven strategies and comprehensive preparation.',
      price: '34,999',
      originalPrice: '54,999',
      duration: '4 months',
      students: '2,000+',
      rating: 4.8,
      features: [
        'Verbal & Quant mastery modules',
        'AWA & IR comprehensive prep',
        'Official GMAT mock tests',
        'Score improvement guarantee',
        'Application essay guidance',
        'One-on-one mentor sessions',
        'Adaptive learning path',
        'Interview preparation',
      ],
      highlights: [
        { icon: BookOpen, text: '400+ Hours Content' },
        { icon: Video, text: '80+ Live Sessions' },
        { icon: FileText, text: '40+ Mock Tests' },
        { icon: Award, text: '720 Avg Score' },
      ],
      badge: 'Best Value',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'GD-PI-WAT Bootcamp',
      description: 'Intensive program to crack group discussions, personal interviews, and written tests for top B-Schools.',
      price: '14,999',
      originalPrice: '24,999',
      duration: '2 months',
      students: '3,500+',
      rating: 4.9,
      features: [
        'Mock GD & PI sessions',
        'Current affairs coverage',
        'Communication skills training',
        'Personality development workshops',
        'Resume building & review',
        'Case study preparation',
        'B-School specific prep',
        'Recording & feedback',
      ],
      highlights: [
        { icon: BookOpen, text: '200+ Hours Content' },
        { icon: Video, text: '50+ Live Sessions' },
        { icon: FileText, text: '30+ Mock GDs' },
        { icon: Award, text: '95% Success Rate' },
      ],
      badge: 'Quick Start',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'XAT Preparation Program',
      description: 'Specialized preparation for XAT including Decision Making, Essay Writing, and all other sections.',
      price: '24,999',
      originalPrice: '39,999',
      duration: '5 months',
      students: '1,500+',
      rating: 4.7,
      features: [
        'XAT-specific strategy sessions',
        'Decision Making mastery',
        'Essay writing workshops',
        'Full-length XAT mocks',
        'XLRI interview preparation',
        'GK & Current affairs',
        'Time management techniques',
        'Expert mentor guidance',
      ],
      highlights: [
        { icon: BookOpen, text: '350+ Hours Content' },
        { icon: Video, text: '70+ Live Sessions' },
        { icon: FileText, text: '35+ Mock Tests' },
        { icon: Award, text: '98%ile Avg Score' },
      ],
      badge: 'New Launch',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Profile Building & Applications',
      description: 'End-to-end guidance for building a strong profile and crafting compelling B-School applications.',
      price: '19,999',
      originalPrice: '34,999',
      duration: '3 months',
      students: '2,500+',
      rating: 4.8,
      features: [
        'Profile evaluation & gap analysis',
        'Essay writing & review',
        'Resume optimization',
        'Recommendation letter guidance',
        'SOP & LOR workshops',
        'Application strategy',
        'B-School research',
        'One-on-one mentorship',
      ],
      highlights: [
        { icon: BookOpen, text: '150+ Hours Content' },
        { icon: Video, text: '40+ Live Sessions' },
        { icon: FileText, text: '10+ Applications' },
        { icon: Award, text: '90% Admit Rate' },
      ],
      badge: 'Premium',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Complete MBA Journey',
      description: 'All-inclusive package covering CAT/GMAT prep, GD-PI-WAT, and profile building for your complete MBA journey.',
      price: '59,999',
      originalPrice: '99,999',
      duration: '12 months',
      students: '4,000+',
      rating: 5.0,
      features: [
        'All courses included',
        'Lifetime access to content',
        'Priority doubt support',
        'Unlimited mock tests',
        'Personal success manager',
        'Exclusive masterclasses',
        'Alumni network access',
        'Job placement assistance',
      ],
      highlights: [
        { icon: BookOpen, text: '1000+ Hours Content' },
        { icon: Video, text: '250+ Live Sessions' },
        { icon: FileText, text: 'Unlimited Mocks' },
        { icon: Award, text: '99% Success Rate' },
      ],
      badge: 'Best Seller',
      color: 'from-rose-500 to-orange-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our expertly designed programs to kickstart your MBA journey with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {course.badge && (
                <div className={`absolute top-6 right-6 bg-gradient-to-r ${course.color} text-white px-4 py-1.5 rounded-full text-sm font-semibold z-10 shadow-lg`}>
                  {course.badge}
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 pr-24">{course.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>

                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">₹{course.price}</span>
                  <span className="ml-2 text-xl text-gray-400 line-through">₹{course.originalPrice}</span>
                  <span className="ml-3 text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    Save {Math.round((1 - parseInt(course.price) / parseInt(course.originalPrice)) * 100)}%
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${course.color} mb-2`}>
                        <highlight.icon className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-xs text-gray-600 leading-tight">{highlight.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600 pb-6 border-b border-gray-200">
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

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white h-12 text-base font-semibold group`}>
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Not sure which course is right for you?</h3>
          <p className="text-xl mb-8 text-white/90">
            Talk to our expert counselors for personalized course recommendations based on your goals.
          </p>
          <Button className="bg-white text-emerald-600 hover:bg-gray-100 h-12 px-8 font-semibold">
            Schedule Free Counseling
          </Button>
        </div>
      </div>
    </div>
  );
}
