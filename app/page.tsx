'use client';

import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Courses from '@/components/home/Courses';
import Testimonials from '@/components/home/Testimonials';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';
import Mentors from '@/components/home/Mentors';
import FAQ from '@/components/home/FAQ';
import { Toaster } from 'sonner';

export default function Home() {
  return (
    <>
      <Toaster position="top-center" richColors />
      <main className="min-h-screen">
        <Hero />
        <Stats />
        <Features />
        <Courses />
        <Mentors />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
