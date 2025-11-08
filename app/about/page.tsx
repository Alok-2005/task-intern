import { Award, Target, Users, Heart, TrendingUp, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from course content to student support.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Heart,
      title: 'Student-First',
      description: 'Every decision we make is centered around what\'s best for our students\' success.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build a supportive community where students learn and grow together.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We constantly innovate our teaching methods to provide the best learning experience.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">ThinkPlus</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An IIM Grads Initiative helping aspiring MBA students achieve their dreams through expert guidance and comprehensive preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-video bg-gradient-to-br from-emerald-200 to-teal-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20"></div>
                <BookOpen className="h-32 w-32 text-emerald-600 relative z-10" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                ThinkPlus was founded by a group of IIM graduates who understood the challenges of MBA preparation firsthand. After successfully navigating the journey to India's top B-Schools, we realized the need for a platform that combines expert mentorship, structured learning, and personalized guidance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What started as a small initiative to help a handful of students has now grown into a thriving community of 10,000+ learners. Our success is measured not just in numbers, but in the dreams we've helped realize and the lives we've impacted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Mission & Vision</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
              <Target className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize access to quality MBA preparation by providing world-class mentorship, comprehensive resources, and personalized guidance to every aspirant, regardless of their background or location.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
              <TrendingUp className="h-12 w-12 text-cyan-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become India's most trusted and effective MBA preparation platform, empowering thousands of students to achieve their dream B-School admissions and build successful careers in management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at ThinkPlus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who have transformed their MBA dreams into reality with ThinkPlus.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 h-12 px-8 text-lg font-semibold">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
