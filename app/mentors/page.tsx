'use client';

import { Linkedin, Mail, MessageCircle, Star, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MentorsPage() {
  const mentors = [
    {
      name: 'Rajesh Kumar',
      iim: 'IIM Ahmedabad (2015)',
      specialization: 'Quantitative Aptitude & GMAT',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With 8+ years of teaching experience, Rajesh has helped over 2000 students crack QA sections. His unique approach combines speed with accuracy.',
      experience: '8+ years',
      students: '2000+',
      rating: 4.9,
      expertise: ['QA Mastery', 'GMAT Quant', 'Time Management'],
    },
    {
      name: 'Priya Sharma',
      iim: 'IIM Bangalore (2014)',
      specialization: 'Verbal Ability & GMAT Verbal',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Priya specializes in verbal reasoning and has a 100% success rate in improving student scores in this section. She mentors both CAT and GMAT aspirants.',
      experience: '7+ years',
      students: '1800+',
      rating: 4.95,
      expertise: ['Verbal Mastery', 'Essay Writing', 'Critical Thinking'],
    },
    {
      name: 'Amit Patel',
      iim: 'IIM Calcutta (2016)',
      specialization: 'Data Interpretation & Logical Reasoning',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Amit brings a corporate analytics background to his teaching. His data-driven approach to DI has revolutionized how students approach this section.',
      experience: '7+ years',
      students: '1900+',
      rating: 4.88,
      expertise: ['Data Interpretation', 'Analytics', 'Problem Solving'],
    },
    {
      name: 'Sneha Reddy',
      iim: 'IIM Lucknow (2017)',
      specialization: 'GD-PI-WAT & Interview Prep',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'As an expert in interview preparation, Sneha has coached 1500+ students through their interview rounds with a 95% conversion rate.',
      experience: '6+ years',
      students: '1500+',
      rating: 4.92,
      expertise: ['GD Excellence', 'Interview Skills', 'Profile Building'],
    },
    {
      name: 'Aditya Patel',
      iim: 'IIM Indore (2015)',
      specialization: 'CAT Strategy & Overall Preparation',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Aditya is the founder\'s right hand and oversees the overall CAT strategy. He has mentored multiple 99+ percentilers and top IIM converts.',
      experience: '9+ years',
      students: '2500+',
      rating: 4.97,
      expertise: ['CAT Strategy', 'Mentoring', 'Leadership'],
    },
    {
      name: 'Kavya Singh',
      iim: 'XLRI Jamshedpur (2016)',
      specialization: 'Profile Building & Applications',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With expertise in applications and profile building, Kavya helps students present their best self to B-Schools. Her strategies have resulted in 90%+ admit rates.',
      experience: '6+ years',
      students: '1200+',
      rating: 4.91,
      expertise: ['Applications', 'Profile Strategy', 'Essay Coaching'],
    },
    {
      name: 'Rohit Verma',
      iim: 'IIM Udaipur (2017)',
      specialization: 'Mock Tests & Performance Analytics',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'An analytics wizard, Rohit has developed the performance tracking system used at ThinkPlus. He helps students identify and fix weak areas systematically.',
      experience: '5+ years',
      students: '1600+',
      rating: 4.85,
      expertise: ['Analytics', 'Performance Tracking', 'Test Strategy'],
    },
    {
      name: 'Manisha Desai',
      iim: 'IIMB Executive (2019)',
      specialization: 'Working Professionals & GMAT',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'As a working professional herself, Manisha understands the unique challenges faced by those balancing career and MBA prep. Her flexible teaching style works perfectly for busy professionals.',
      experience: '5+ years',
      students: '900+',
      rating: 4.9,
      expertise: ['GMAT Coaching', 'Work-Life Balance', 'Executive Programs'],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Mentors</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from India's best MBA preparation mentors. All from top IIMs with years of teaching experience and proven track records.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">{mentor.name}</h3>
                <p className="text-sm font-semibold text-emerald-600 mb-1">{mentor.iim}</p>
                <p className="text-xs text-gray-600 mb-3">{mentor.specialization}</p>

                <div className="flex items-center space-x-2 mb-3 text-xs text-gray-600">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{mentor.rating}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  <div className="bg-emerald-50 rounded p-2 text-center">
                    <div className="font-bold text-gray-900">{mentor.experience}</div>
                    <div className="text-gray-600">Experience</div>
                  </div>
                  <div className="bg-teal-50 rounded p-2 text-center">
                    <div className="font-bold text-gray-900">{mentor.students}</div>
                    <div className="text-gray-600">Students</div>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-xs text-gray-600 leading-relaxed">{mentor.bio}</p>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {mentor.expertise.map((skill, idx) => (
                    <span key={idx} className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 text-white text-xs"
                  >
                    <MessageCircle className="h-3 w-3 mr-1" /> Chat
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 w-8 p-0"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <Users className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">50+ Expert Mentors</h3>
            <p className="text-white/90">All from top IIMs with proven track records</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
            <Award className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">95% Success Rate</h3>
            <p className="text-white/90">Student satisfaction and conversion rates</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <TrendingUp className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Proven Results</h3>
            <p className="text-white/90">10,000+ students transformed</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Prepare with Our Mentors?</h2>
          <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 text-white h-12 px-8 text-lg font-semibold">
            Book a Free Session
          </Button>
        </div>
      </div>
    </div>
  );
}
