'use client';

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Arjun Mehta',
      college: 'IIM Ahmedabad',
      score: 'CAT 99.8%ile',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'ThinkPlus transformed my preparation journey. The personalized attention from mentors and structured study plan helped me achieve my dream percentile. The mock tests were incredibly helpful!',
      rating: 5,
    },
    {
      name: 'Ananya Singh',
      college: 'IIM Bangalore',
      score: 'CAT 99.5%ile',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The GD-PI preparation at ThinkPlus gave me the confidence to face interviews. The mentors helped me identify my strengths and work on my weaknesses. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Rohit Sharma',
      college: 'IIM Calcutta',
      score: 'CAT 99.6%ile',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Best decision I made was joining ThinkPlus. The comprehensive study material and regular doubt sessions ensured I stayed on track. Thank you for making my dream come true!',
      rating: 5,
    },
    {
      name: 'Kavya Reddy',
      college: 'IIM Lucknow',
      score: 'CAT 99.2%ile',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The live classes and interactive sessions made learning enjoyable. The mentors genuinely cared about my progress and provided valuable insights throughout my preparation.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our students who cracked their dream B-Schools with ThinkPlus.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <Quote className="h-12 w-12 text-emerald-400 mb-6" />

            <div className="mb-8">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-8">
                {testimonials[currentIndex].text}
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400"
                />
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-emerald-400 font-semibold">{testimonials[currentIndex].college}</p>
                  <p className="text-gray-300 text-sm">{testimonials[currentIndex].score}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full h-12 w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-emerald-400' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full h-12 w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
