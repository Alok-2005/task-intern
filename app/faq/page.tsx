import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

export default function FAQPage() {
  const categories = [
    {
      title: 'Admissions & Programs',
      questions: [
        {
          q: 'What is the eligibility criteria for ThinkPlus courses?',
          a: 'There are no strict eligibility criteria. Anyone preparing for MBA entrance exams (CAT, GMAT, XAT) can join ThinkPlus. We have courses for various levels from beginners to advanced.',
        },
        {
          q: 'Do I need any prior exam preparation experience?',
          a: 'No, we start from scratch. Our courses are designed for both freshers and those who have attempted exams before. We customize learning based on your current level.',
        },
        {
          q: 'Can working professionals join your courses?',
          a: 'Absolutely! We have flexible schedules specifically designed for working professionals. Many of our successful students are working while preparing.',
        },
      ],
    },
    {
      title: 'Courses & Learning',
      questions: [
        {
          q: 'What is the duration of the courses?',
          a: 'Course durations vary. CAT prep is typically 6 months, GMAT is 4 months, and GD-PI is 2 months. However, you can customize your timeline based on your goals.',
        },
        {
          q: 'Do you offer offline classes?',
          a: 'We primarily offer online classes via our interactive platform. However, we organize occasional offline workshops in major cities. Contact us to know about upcoming offline events.',
        },
        {
          q: 'What is the class size?',
          a: 'Our live classes are kept small (15-20 students) to ensure personalized attention. For recorded lectures and mock tests, you have unlimited access.',
        },
      ],
    },
    {
      title: 'Pricing & Payments',
      questions: [
        {
          q: 'Do you offer payment plans?',
          a: 'Yes, we offer flexible payment plans. You can pay 50% upfront and the rest in installments. Contact our team for customized payment options.',
        },
        {
          q: 'What is your refund policy?',
          a: 'We offer a 14-day money-back guarantee. If you\'re not satisfied within 14 days, we\'ll refund your full payment with no questions asked.',
        },
        {
          q: 'Are there any hidden charges?',
          a: 'No hidden charges. The price you see is what you pay. All study materials, live sessions, and mock tests are included in the course fee.',
        },
      ],
    },
    {
      title: 'Technical & Access',
      questions: [
        {
          q: 'What do I need to attend live classes?',
          a: 'You just need a laptop/desktop/tablet with a stable internet connection. We use Zoom for live sessions. No special software installation needed.',
        },
        {
          q: 'Can I access course materials anytime?',
          a: 'Yes, you have lifetime access to all recorded lectures, study materials, and notes. You can access them anytime, anywhere.',
        },
        {
          q: 'What if I miss a live class?',
          a: 'No worries! All live sessions are recorded and uploaded within 24 hours. You can watch them at your own pace.',
        },
      ],
    },
    {
      title: 'Success & Results',
      questions: [
        {
          q: 'What is the average improvement in mock test scores?',
          a: 'On average, students improve by 8-12 percentile points in their first month with us. By course completion, average improvement is 15-20 percentile points.',
        },
        {
          q: 'Do you guarantee admission to top B-Schools?',
          a: 'We can\'t guarantee admission as it depends on multiple factors. However, 95% of our students crack competitive exams with 99+ percentiles and 90%+ get calls from top B-Schools.',
        },
        {
          q: 'Can I get a refund if I don\'t succeed?',
          a: 'Our money-back guarantee is only for the first 14 days. After that, we\'re confident about our results, but we encourage you to seek help if you\'re struggling.',
        },
      ],
    },
    {
      title: 'Mentors & Support',
      questions: [
        {
          q: 'Who are the mentors?',
          a: 'All our mentors are from top IIMs with 5+ years of teaching experience. They have personally cracked MBA entrance exams and understand student challenges.',
        },
        {
          q: 'Can I choose a specific mentor?',
          a: 'You\'re assigned a mentor based on your exam type and learning style. However, you can request a change if you\'re not comfortable.',
        },
        {
          q: 'What if I need help outside of class hours?',
          a: 'We have a 24/7 doubt support system. You can ask questions on our WhatsApp group, forum, or schedule one-on-one sessions with mentors.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about ThinkPlus programs, pricing, and more.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <HelpCircle className="h-6 w-6 mr-3 text-emerald-600" />
                {category.title}
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, qIdx) => (
                  <AccordionItem
                    key={qIdx}
                    value={`${idx}-${qIdx}`}
                    className="bg-white rounded-xl px-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-emerald-600">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <MessageCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat Support</h3>
            <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Start Chat
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <Phone className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">+91 98765 43210</p>
            <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 8 PM IST</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <Mail className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">support@thinkpluseducation.com</p>
            <p className="text-sm text-gray-500">Response within 2 hours</p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Didn't find your answer?</h3>
          <p className="text-xl mb-8 text-white/90">
            Our support team is ready to help you with any questions or concerns.
          </p>
          <Button className="bg-white text-emerald-600 hover:bg-gray-100 h-12 px-8 font-semibold">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
