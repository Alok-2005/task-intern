'use client';

import { Calendar, User, Clock, Eye, Share2, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      id: 1,
      title: 'How to Score 99+ Percentile in CAT: A Strategic Guide',
      excerpt: 'Learn the proven strategies used by 99+ percentilers to dominate the CAT exam. This comprehensive guide covers time management, section prioritization, and mental preparation.',
      author: 'Rajesh Kumar',
      date: 'Mar 15, 2025',
      readTime: '8 min',
      views: '12.5K',
      image: 'https://images.pexels.com/photos/3808014/pexels-photo-3808014.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'CAT Strategy',
      tags: ['CAT', 'Strategy', 'Success'],
    },
    {
      id: 2,
      title: 'The Ultimate GD-PI Preparation Guide for IIM Aspirants',
      excerpt: 'Master the art of group discussions and personal interviews with insider tips from IIM mentors. Learn how to stand out in a room full of bright candidates.',
      author: 'Priya Sharma',
      date: 'Mar 12, 2025',
      readTime: '10 min',
      views: '9.8K',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Interview Prep',
      tags: ['GD', 'PI', 'Interview'],
    },
    {
      id: 3,
      title: 'GMAT vs CAT: Which Exam Should You Take?',
      excerpt: 'Confused between GMAT and CAT? This detailed comparison helps you understand the differences, similarities, and which exam suits your profile better.',
      author: 'Rohit Sharma',
      date: 'Mar 10, 2025',
      readTime: '7 min',
      views: '15.3K',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Exam Comparison',
      tags: ['GMAT', 'CAT', 'Decision'],
    },
    {
      id: 4,
      title: 'Time Management Tips for Working Professionals',
      excerpt: 'Juggling work and MBA prep? Discover how successful working professionals managed to crack top B-Schools without sacrificing their jobs.',
      author: 'Kavya Reddy',
      date: 'Mar 08, 2025',
      readTime: '6 min',
      views: '11.2K',
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Work-Life Balance',
      tags: ['Time Management', 'Work', 'Professional'],
    },
    {
      id: 5,
      title: 'Building a Strong MBA Application Profile',
      excerpt: 'Your CAT score is just one part of your application. Learn how to build a holistic profile that impresses admission committees at top B-Schools.',
      author: 'Aditya Patel',
      date: 'Mar 05, 2025',
      readTime: '9 min',
      views: '8.7K',
      image: 'https://images.pexels.com/photos/3962290/pexels-photo-3962290.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Profile Building',
      tags: ['Application', 'Profile', 'Strategy'],
    },
    {
      id: 6,
      title: 'Mastering Quantitative Aptitude: Common Mistakes to Avoid',
      excerpt: 'Discover the most common mistakes QA students make and learn how to avoid them. Plus, get access to high-yield problems that appear frequently in exams.',
      author: 'Sneha Singh',
      date: 'Mar 02, 2025',
      readTime: '8 min',
      views: '13.4K',
      image: 'https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'QA Mastery',
      tags: ['QA', 'Math', 'Mistakes'],
    },
  ];

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ThinkPlus <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, success strategies, and insider tips from IIM mentors and successful MBA aspirants.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-white rounded-xl"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Eye className="h-4 w-4 mr-1" /> {article.views}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-gray-600 mb-4">{article.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" /> {article.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" /> {article.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" /> {article.readTime}
                      </span>
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Topics</h3>
              <div className="space-y-3">
                {['CAT Strategy', 'Interview Prep', 'GMAT Tips', 'Time Management', 'Profile Building', 'Success Tips'].map(
                  (topic) => (
                    <button
                      key={topic}
                      className="block w-full text-left px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 rounded-lg hover:from-emerald-100 hover:to-teal-100 transition-all font-medium"
                    >
                      {topic}
                    </button>
                  )
                )}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl text-white">
                <h4 className="font-bold mb-2">Newsletter</h4>
                <p className="text-sm text-white/90 mb-4">Get weekly insights and tips directly in your inbox.</p>
                <Button className="w-full bg-white text-emerald-600 hover:bg-gray-100">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
