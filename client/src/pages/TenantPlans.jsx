import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcManager } from "react-icons/fc";
import { FaCheck, FaTimes } from 'react-icons/fa';

const plans = [
  {
    name: 'Freedom Plan',
    price: 1499,
    oldPrice: 1999,
    title: 'Get genuine house owner contacts matching your requirements',
    contacts: 25,
    bgcol: 'bg-emerald-700',
    titlecol: 'text-emerald-700',
    details: [
      'Complete Relocation Assistance on Call',
      'Free Customized Packer and Mover Quote',
      'Free Rental Agreement consultation with expert',
      'On-Demand Support'
    ],
    benefits: [
      { title: 'Premium Filters', available: true },
      { title: 'Number of Contacts', value: 'upto 25' },
      { title: 'Instant Property Alerts on SMS', available: true },
      { title: 'Locality Experts', available: false },
      { title: 'Rent Negotiation', available: false },
    ]
  },
  {
    name: 'Relax Plan',
    price: 3499,
    oldPrice: 4499,
    title: 'Get Relationship Manager to help you SAVE time and money',
    contacts: 50,
    bgcol: 'bg-cyan-700',
    titlecol: 'text-cyan-700',
    details: [
      'Relationship Manager',
      'Contacts owners and fixes meetings',
      'Negotiates rent on your behalf',
      'Provides locality level expertise'
    ],
    benefits: [
      { title: 'Premium Filters', available: true },
      { title: 'Number of Contacts', value: 'upto 50' },
      { title: 'Instant Property Alerts', available: true },
      { title: 'Locality Experts', available: true },
      { title: 'Rent Negotiation', available: true },
    ]
  },
  {
    name: 'MoneyBack Plan',
    price: 5999,
    oldPrice: 7499,
    title: 'Get Guaranteed home or 100% Refund',
    contacts: 50,
    bgcol: 'bg-rose-500',
    titlecol: 'text-rose-500',
    details: [
      'Relationship Manager',
      'Contacts owners and fixes meetings',
      'Negotiates rent on your behalf',
      'Provides locality level expertise'
    ],
    benefits: [
      { title: 'Premium Filters', available: true },
      { title: 'Number of Contacts', value: 'upto 50' },
      { title: 'Instant Property Alerts', available: true },
      { title: 'Locality Experts', available: true },
      { title: 'Rent Negotiation', available: true },
    ]
  },
];

const TenantPlans = () => {
  const navigate = useNavigate();

  const handleSubscribe = (plan) => {
    navigate('/tenant/plans/checkout', { state: { plan } });
  };

  return (
    <div className="p-20 bg-gray-50">
      <div className="flex-1 basis-[20rem] flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold capitalize md:text-3xl p-10">
          Choose a plan and <span className='text-primary'>SAVE THOUSANDS</span> on brokerage.
        </h1>
        <p className='mb-10'>
          For assistance call us at: <span className='text-primary'>+8801766679431</span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="border rounded overflow-hidden shadow-lg flex flex-col">
            <div className={`${plan.bgcol} text-white p-2 flex justify-between items-center`}>
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="text-right">
                <p className="text-xl font-bold">৳ {plan.price}</p>
                <p className="text-sm line-through">৳ {plan.oldPrice}</p>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className={`${plan.titlecol} mb-4`}>{plan.title}</h2>
              <div className={`flex items-start mb-4 gap-4 ${index === 2 ? "mt-8":"mt-2"}`}>
                <FcManager size={48} className="mr-4" />
                <div>
                  <h4 className="font-semibold mb-2">{plan.details[0]}</h4>
                  <ul className="list-disc pl-5 font-poppins text-xs space-y-4">
                    {plan.details.slice(1).map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className= {index === 1 ? "mt-16" : index === 2 ? "mt-16" : "mt-4"}>
                {plan.benefits.map((benefit, i) => (
                  <div key={i} className="flex justify-between items-center mb-2 text-sm">
                    <span>{benefit.title} </span>
                    <span>{benefit.value && `${benefit.value}`}</span>
                    {benefit.available !== undefined && (
                      benefit.available ? <FaCheck className="text-green-800 text-sm" /> : <FaTimes className="text-red-800" />
                    )}
                  </div>
                ))}
              </div>
              <button 
                className={`${plan.bgcol} mt-6 px-4 py-2 text-white rounded self-center`}
                onClick={() => handleSubscribe(plan)}
              >
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenantPlans;
