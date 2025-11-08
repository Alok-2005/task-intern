'use client';

import { Star, Award, TrendingUp, Calendar, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: 'Arjun Mehta',
      college: 'IIM Ahmedabad',
      score: 'CAT 99.8%ile',
      background: 'Engineer from NIT',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      story: 'Started with just 88%ile, ThinkPlus mentors identified my strengths and helped me focus on verbal ability. In 6 months, I scored 99.8%ile and got calls from all top IIMs.',
      highlights: ['CAT 99.8%ile', 'IIM Ahmedabad Convert', 'IIMA Final Selection'],
      journey: '6 months with ThinkPlus',
      salary: '₹20 LPA (Pre-placement offer)',
    },
    {
      name: 'Priya Sharma',
      college: 'IIM Bangalore',
      score: 'CAT 99.5%ile',
      background: 'Commerce Graduate',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      story: 'Coming from a non-engineering background, I was intimidated by quantitative sections. ThinkPlus\'s GD-PI prep was exceptional. I excelled in interviews and secured IIMB.',
      highlights: ['CAT 99.5%ile', 'IIM Bangalore Convert', 'IIM Udaipur Convert'],
      journey: '8 months with ThinkPlus',
      salary: '₹18 LPA',
    },
    {
      name: 'Rohit Sharma',
      college: 'IIM Calcutta',
      score: 'CAT 99.6%ile',
      background: 'Sales Professional',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      story: 'Working full-time made preparation challenging. ThinkPlus\'s flexible schedule and personalized mentorship helped me balance work and studies effectively.',
      highlights: ['CAT 99.6%ile', 'IIM Calcutta Convert', 'ISB Interview Call'],
      journey: '10 months (Part-time)',
      salary: '₹22 LPA',
    },
    {
      name: 'Kavya Reddy',
      college: 'IIM Lucknow',
      score: 'CAT 99.2%ile',
      background: 'IT Professional',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      story: 'The analytics dashboard and mock tests helped me track my progress effectively. The mentors provided specific advice for each section, which accelerated my learning curve.',
      highlights: ['CAT 99.2%ile', 'IIM Lucknow Convert', 'XLRI Convert'],
      journey: '7 months with ThinkPlus',
      salary: '₹19 LPA',
    },
    {
      name: 'Aditya Patel',
      college: 'IIM Indore',
      score: 'CAT 99.3%ile',
      background: 'Medical Professional',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      story: 'Career transition wasn\'t easy, but ThinkPlus\'s holistic approach to CAT and interview prep gave me confidence. Now leading operations at a top consulting firm.',
      highlights: ['CAT 99.3%ile', 'IIM Indore Convert', 'FMS Delhi Call'],
      journey: '9 months with ThinkPlus',
      salary: '₹21 LPA',
    },
    {
      name: 'Sneha Singh',
      college: 'XLRI Jamshedpur',
      score: 'CAT 98.8%ile',
      background: 'Government Employee',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      story: 'Breaking the pattern from my background was tough, but the GDPI training at ThinkPlus was game-changing. Impressed interviewers and secured my dream college.',
      highlights: ['CAT 98.8%ile', 'XLRI Convert', 'Interview Excellence'],
      journey: '8 months with ThinkPlus',
      salary: '₹17 LPA',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Inspiring <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real students, real dreams, real achievements. Discover how ThinkPlus transformed their MBA journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{story.name}</h3>
                  <p className="text-emerald-300 font-semibold text-sm">{story.college}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {story.score}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">{story.story}</p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-4 w-4 mr-2 text-emerald-600" />
                    {story.background}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-teal-600" />
                    {story.journey}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-2 text-cyan-600" />
                    {story.salary}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {story.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-semibold"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students who've transformed their MBA dreams into reality.
          </p>
          <Button className="bg-white text-emerald-600 hover:bg-gray-100 h-12 px-8 font-semibold">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </div>
  );
}
