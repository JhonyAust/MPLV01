import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaTimes, FaMoneyCheckAlt, FaUserTie, FaPhoneAlt, FaBullhorn, FaHandsHelping, FaFacebook, FaShieldAlt, FaHouseUser, FaCameraRetro, FaCalendarAlt } from 'react-icons/fa';

const plans = [
  {
    name: 'MoneyBack Plan NRI',
    price: 20999,
    description: 'Guaranteed buyers or Moneyback. Relationship Manager for Super-fast closure.',
    features: [true, true, true, true, true, true, true, true, true, '6 Months']
  },
  {
    name: 'Relax Plan NRI',
    price: 10999,
    description: 'Get Buyers Quickly. Save Lakhs on Brokerage.',
    features: [true, true, true, true, true, true, true, true, false, '3 Months']
  },
  {
    name: 'Super MoneyBack Plan NRI',
    price: 26999,
    description: 'Guaranteed buyers or Moneyback. Hire Field Assistant for showing your house.',
    features: [true, true, true, true, true, true, true, true, true, '6 Months']
  },
  {
    name: 'Super Relax Plan NRI',
    price: 14999,
    description: 'Leave your house keys and worries to us. Get buyer super-fast.',
    features: [true, true, true, true, true, true, true, true, true, '3 Months']
  },
];

const features = [
  { name: 'Guaranteed buyers or Moneyback', icon: <FaMoneyCheckAlt className="mr-2 text-teal-600" size={30} /> },
  { name: 'Personal Field assistant', icon: <FaUserTie className="mr-2 text-teal-600" size={25} /> },
  { name: 'International Calling 24*7', icon: <FaPhoneAlt className="mr-2 text-teal-600" size={25} /> },
  { name: 'Property promotion on site', icon: <FaBullhorn className="mr-2 text-teal-600" size={25} /> },
  { name: 'Relationship Manager (RM)', icon: <FaHandsHelping className="mr-2 text-teal-600" size={25} /> },
  { name: 'Facebook Marketing Of Property', icon: <FaFacebook className="mr-2 text-teal-600" size={25} /> },
  { name: 'Privacy of your phone number', icon: <FaShieldAlt className="mr-2 text-teal-600" size={25} /> },
  { name: 'Showing property on your behalf', icon: <FaHouseUser className="mr-2 text-teal-600" size={25} /> },
  { name: 'Photoshoot of your property', icon: <FaCameraRetro className="mr-2 text-teal-600" size={25} /> },
  { name: 'Plan Validity', icon: <FaCalendarAlt className="mr-2 text-teal-600" size={20} /> },
];

const SellerPlans = () => {
  const navigate = useNavigate();

  const handleSubscribe = (plan) => {
    navigate('/seller/plans/checkout', { state: { plan } });
  };

  return (
    <div className="p-20 bg-gray-50">
      <div className="flex-1 basis-[20rem] flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold capitalize md:text-3xl p-10">
          Get Buyers Quickly. <span className='text-primary'>SAVE LAKHS</span> on Brokerage.
        </h1>
        <p className='mb-10'>
          For assistance call us at: <span className='text-primary'>+91-92-425-000-00</span>
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Features</th>
              {plans.map((plan, index) => (
                <th 
                  key={index} 
                  className="py-2 px-4 border-b border-gray-200 shadow-lg transition-all hover:shadow-2xl hover:bg-gray-100"
                >
                  <div className="font-semibold">{plan.name}</div>
                  <div>৳ {plan.price}</div>
                  <button
                    className="mt-2 py-1 w-full bg-[#0CB88F] text-white rounded"
                    onClick={() => handleSubscribe(plan)}
                  >
                    Subscribe
                  </button>
                  <div className="mt-2 font-poppins text-xs font-normal">{plan.description}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, i) => (
              <tr key={i} className={`text-center ${i % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                <td className="py-2 px-4 border-b border-gray-200">
                  <div className="flex items-center justify-center">
                    {feature.icon}
                    {feature.name}
                  </div>
                </td>
                {plans.map((plan, index) => (
                  <td 
                    key={index} 
                    className="py-2 px-4 border-b border-gray-200 shadow-lg transition-all hover:shadow-2xl hover:bg-gray-100"
                  >
                    {typeof plan.features[i] === 'boolean' ? 
                      (plan.features[i] ? <FaCheck size={16} className="text-emerald-600" /> : <FaTimes className="text-red-800" />) : 
                      plan.features[i]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerPlans;
