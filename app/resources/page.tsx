'use client';

import { Download, FileText, Video, BookOpen, Zap, Clock, Users, Award, FileDown, ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ResourcesPage() {
  const eBooks = [
    {
      title: 'CAT Fundamentals Guide',
      description: 'Complete guide covering all CAT basics, syllabus, and preparation strategy',
      pages: 85,
      downloads: '12.5K',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'GMAT Verbal Mastery',
      description: 'Comprehensive guide to tackle all verbal question types with examples',
      pages: 120,
      downloads: '8.3K',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Interview Success Blueprint',
      description: 'Insider\'s guide to cracking GD, PI, and WAT rounds at top B-Schools',
      pages: 95,
      downloads: '15.2K',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Resume & Profile Building',
      description: 'Step-by-step guide to create an impressive MBA application profile',
      pages: 75,
      downloads: '10.8K',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Time Management Hacks',
      description: 'Proven strategies to balance work, life, and exam preparation',
      pages: 60,
      downloads: '9.5K',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Data Interpretation Toolkit',
      description: 'Master DI with 100+ problems, templates, and shortcut techniques',
      pages: 110,
      downloads: '11.2K',
      color: 'from-rose-500 to-orange-500',
    },
  ];

  const videos = [
    {
      title: 'CAT Strategy Masterclass',
      instructor: 'Rajesh Kumar (IIM-A)',
      duration: '45 min',
      views: '25K',
      rating: 4.9,
      topic: 'Quantitative Aptitude',
    },
    {
      title: 'GMAT Verbal Tricks',
      instructor: 'Priya Sharma (IIM-B)',
      duration: '38 min',
      views: '18K',
      rating: 4.8,
      topic: 'Critical Reasoning',
    },
    {
      title: 'GD Tips from IIM Students',
      instructor: 'Rohit Sharma (IIM-C)',
      duration: '42 min',
      views: '22K',
      rating: 4.9,
      topic: 'Group Discussion',
    },
    {
      title: 'Personal Interview Preparation',
      instructor: 'Kavya Reddy (IIM-L)',
      duration: '50 min',
      views: '30K',
      rating: 5.0,
      topic: 'Interview Skills',
    },
    {
      title: 'Essay Writing Essentials',
      instructor: 'Aditya Patel (IIM-I)',
      duration: '35 min',
      views: '16K',
      rating: 4.7,
      topic: 'Written Assessment',
    },
    {
      title: 'Profile Building Workshop',
      instructor: 'Sneha Singh (XLRI)',
      duration: '48 min',
      views: '20K',
      rating: 4.8,
      topic: 'Application Strategy',
    },
  ];

  const templates = [
    {
      name: 'Study Schedule Template',
      format: 'Excel',
      size: '2.5 MB',
      downloads: '5.2K',
    },
    {
      name: 'Resume Template (MBA Format)',
      format: 'Word',
      size: '1.8 MB',
      downloads: '7.8K',
    },
    {
      name: 'Essay Structure Guide',
      format: 'PDF',
      size: '3.1 MB',
      downloads: '4.5K',
    },
    {
      name: 'Interview Preparation Tracker',
      format: 'Excel',
      size: '2.2 MB',
      downloads: '6.3K',
    },
    {
      name: 'Daily Study Planner',
      format: 'Notion',
      size: '4.5 MB',
      downloads: '8.9K',
    },
    {
      name: 'Mock Test Analysis Sheet',
      format: 'Excel',
      size: '2.8 MB',
      downloads: '5.7K',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free Learning <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access premium eBooks, video tutorials, and templates to accelerate your MBA preparation journey.
          </p>
        </div>

        <Tabs defaultValue="ebooks" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="ebooks">eBooks</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="ebooks" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eBooks.map((book, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${book.color} mb-4`}>
                    <FileText className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{book.description}</p>

                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" /> {book.pages} pages
                    </span>
                    <span className="flex items-center">
                      <Download className="h-4 w-4 mr-1" /> {book.downloads}
                    </span>
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${book.color} hover:opacity-90 text-white`}>
                    Download Now
                    <FileDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-emerald-200 to-teal-200 flex items-center justify-center relative group-hover:scale-105 transition-transform">
                    <Video className="h-16 w-16 text-emerald-600 opacity-30" />
                    <button className="absolute w-16 h-16 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors">
                      <Play className="h-6 w-6 text-white fill-white ml-1" />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{video.instructor}</p>

                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" /> {video.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" /> {video.views}
                      </span>
                      <span className="flex items-center">
                        <Award className="h-4 w-4 mr-1 text-yellow-500" /> {video.rating}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {video.topic}
                      </span>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 text-white">
                      Watch Free
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{template.name}</h3>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Format</span>
                      <span className="font-semibold text-gray-900">{template.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>File Size</span>
                      <span className="font-semibold text-gray-900">{template.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Downloads</span>
                      <span className="font-semibold text-gray-900">{template.downloads}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white">
                    Download
                    <FileDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <Zap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">500+ Resources</h3>
            <p className="text-gray-600">Comprehensive collection covering all topics</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <Award className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Created</h3>
            <p className="text-gray-600">By IIM graduates and subject experts</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <Users className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">100% Free</h3>
            <p className="text-gray-600">No hidden charges or premium upgrades</p>
          </div>
        </div>
      </div>
    </div>
  );
}
