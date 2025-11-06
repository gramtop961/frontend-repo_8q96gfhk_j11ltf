import React from 'react';
import { Calendar, Grid3X3, Bell, Wand2 } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI-led Onboarding',
    desc: 'Guided questions to capture your brand voice and posting goals in minutes.'
  },
  {
    icon: Calendar,
    title: 'Calendar Planning',
    desc: 'Draft, schedule and visualize your posts on a clean calendar.'
  },
  {
    icon: Grid3X3,
    title: 'Instagram Grid Preview',
    desc: 'Experiment with a 3×3 layout and reorder to get the perfect look.'
  },
  {
    icon: Bell,
    title: 'Gentle Reminders',
    desc: 'In-app reminders for upcoming posts while the app is open.'
  }
];

const Features = () => {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900">
        Everything you need to plan great posts
      </h2>
      <p className="mt-2 max-w-2xl text-gray-600">Built for creators and small brands. English and Kiswahili captions powered by AI.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-transform hover:scale-[1.01]">
            <f.icon className="h-6 w-6 text-gray-900" />
            <h3 className="mt-4 font-medium text-gray-900">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
