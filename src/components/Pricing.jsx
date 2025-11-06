import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Monthly',
    price: '9,999 TZS',
    period: 'per month',
    features: [
      'AI English & Kiswahili captions',
      'Calendar & grid view',
      'Manual Selcom payments',
      'Trial access while we review'
    ]
  },
  {
    name: 'Yearly',
    price: '99,999 TZS',
    period: 'per year',
    featured: true,
    features: [
      'All monthly features',
      'Best value for committed creators',
      'Priority support'
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="border-t border-gray-100 bg-gray-50/50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900">Simple pricing</h2>
        <p className="mt-2 max-w-2xl text-gray-600">Pay with Selcom, upload proof, and start a temporary trial while we confirm your subscription.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border ${p.featured ? 'border-gray-900' : 'border-gray-100'} bg-white p-6 shadow-sm`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium text-gray-900">{p.name}</h3>
                <div className="text-right">
                  <div className="text-2xl font-semibold text-gray-900">{p.price}</div>
                  <div className="text-xs text-gray-500">{p.period}</div>
                </div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-gray-900" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.01] ${p.featured ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 ring-1 ring-gray-200'}`}>Choose {p.name}</button>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-100 bg-white p-6">
          <h4 className="font-medium text-gray-900">Selcom payment details</h4>
          <p className="mt-2 text-sm text-gray-600">Pay with Selcom to the provided business number. After payment, keep your reference number and upload the screenshot during checkout inside the app.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
