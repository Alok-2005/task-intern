import { BookOpen, Users, Video, MessageCircle, Award, TrendingUp } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Study Material',
      description: 'Access curated content covering all CAT, GMAT, and MBA entrance exam topics with regular updates.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Users,
      title: 'IIM Graduate Mentors',
      description: 'Learn from experienced mentors who have cracked top B-School exams and interviews themselves.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Video,
      title: 'Live Interactive Classes',
      description: 'Attend live sessions with doubt-clearing, strategy discussions, and personalized feedback.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: MessageCircle,
      title: '24/7 Doubt Support',
      description: 'Get your queries resolved anytime with our dedicated support team and community forums.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Award,
      title: 'Mock Tests & Analytics',
      description: 'Practice with full-length mocks and get detailed performance analytics to track your progress.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: TrendingUp,
      title: 'Personalized Learning Path',
      description: 'AI-powered recommendations to focus on your weak areas and maximize score improvement.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">ThinkPlus?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a complete learning ecosystem designed to help you achieve your MBA dreams with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>

              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
