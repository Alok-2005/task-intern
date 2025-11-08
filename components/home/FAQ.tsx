'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export default function FAQ() {
  const faqs = [
    {
      question: 'What makes ThinkPlus different from other EdTech platforms?',
      answer: 'ThinkPlus is founded and run by IIM graduates who understand the MBA preparation journey firsthand. We offer personalized mentorship, live interactive classes, and a comprehensive study approach that has helped 500+ students crack top B-Schools.',
    },
    {
      question: 'Do you offer a money-back guarantee?',
      answer: 'Yes, we offer a 14-day money-back guarantee. If you\'re not satisfied with our course within the first 14 days, we\'ll refund your payment in full, no questions asked.',
    },
    {
      question: 'Can I access course materials after the course ends?',
      answer: 'Absolutely! Once you enroll, you get lifetime access to all course materials, including recorded lectures, study notes, and practice tests. You can revisit the content anytime you need.',
    },
    {
      question: 'How are the live classes conducted?',
      answer: 'Live classes are conducted via our interactive platform where you can see the instructor, ask questions in real-time, and participate in discussions. All sessions are recorded for later review.',
    },
    {
      question: 'What is the average percentile of ThinkPlus students?',
      answer: 'Our students consistently achieve outstanding results, with an average percentile of 99.5 in CAT. We\'ve helped 500+ students get into IIMs and other top B-Schools.',
    },
    {
      question: 'Do you provide personalized study plans?',
      answer: 'Yes, every student gets a personalized study plan based on their current preparation level, target score, and available time. Our AI-powered system tracks your progress and adjusts recommendations accordingly.',
    },
    {
      question: 'Is there any support for profile building and essays?',
      answer: 'Yes, our comprehensive programs include profile building guidance, essay reviews, and application support. Our mentors help you craft compelling applications that stand out.',
    },
    {
      question: 'Can I switch between courses?',
      answer: 'Yes, you can upgrade to a higher-tier course at any time by paying the difference. Please contact our support team for assistance with course changes.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ThinkPlus and our programs.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl px-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-emerald-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
