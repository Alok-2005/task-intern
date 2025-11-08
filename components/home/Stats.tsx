import { Users, Award, BookOpen, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Students',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Award,
      value: '500+',
      label: 'IIM Selections',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: BookOpen,
      value: '50+',
      label: 'Expert Courses',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: TrendingUp,
      value: '99.5%',
      label: 'Avg Percentile',
      color: 'from-blue-500 to-indigo-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
