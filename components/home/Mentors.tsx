import { GraduationCap, Linkedin } from 'lucide-react';

export default function Mentors() {
  const mentors = [
    {
      name: 'Rajesh Kumar',
      title: 'IIM Ahmedabad',
      expertise: 'Quantitative Aptitude',
      experience: '8+ years',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Priya Sharma',
      title: 'IIM Bangalore',
      expertise: 'Verbal Ability',
      experience: '6+ years',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Amit Patel',
      title: 'IIM Calcutta',
      expertise: 'Data Interpretation',
      experience: '7+ years',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sneha Reddy',
      title: 'IIM Lucknow',
      expertise: 'Logical Reasoning',
      experience: '5+ years',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learn from <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">IIM Graduates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert mentors have walked the path you're on and are here to guide you to success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                  <button className="text-gray-400 hover:text-emerald-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <GraduationCap className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-600">{mentor.title}</span>
                </div>

                <p className="text-gray-700 font-medium mb-1">{mentor.expertise}</p>
                <p className="text-sm text-gray-500">{mentor.experience} teaching experience</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <button className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
