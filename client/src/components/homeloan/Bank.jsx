import { useState } from 'react';
import {
    BiSolidDetail,
    BiMoney,
  } from "react-icons/bi";
import { RiFundsBoxFill } from "react-icons/ri";
const services = [
    {
        id: 1,
        name: "Fill Details",
        icon: <BiSolidDetail />,
        text: "Provide your contact details and Check Loan Amount Eligibility.",
      },
    {
      id: 2,
      name: "Max Fund",
      icon: <RiFundsBoxFill />,
      text: "Get Upto 90% of property’s value as home loan from the Bank of your choice.",
    },
    
    {
      id: 3,
      name: "No Hidden Charge",
      icon: <BiMoney />,
      text: "Get Home Loan Services from NoBroker without paying any fees.",
    },
  ];

const Bank = () => {
  const [activeButton, setActiveButton] = useState(1);

  return (
    <div className='bg-[#F0F0F0] p-6'>
    <div className="container mx-auto bg-[white] ">
    <div className='flex flex-row p-4'>
     <div>
      {/* Button Section */}
      <div className="mb-4 mt-8">
        <h1 className="text-2xl px-2 font-semibold">
        Our Banking Partners
        </h1>
      </div>
      <div className="flex  mb-8">
        <button
          className={`mr-4 px-4 py-2 rounded-full ${activeButton === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setActiveButton(1)}
        >
          Lowest Interest
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded-full ${activeButton === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setActiveButton(2)}
        >
          Max Tenure
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeButton === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setActiveButton(3)}
        >
          Max Funding
        </button>
      </div>
      {/* border line */}
    <div className="border-t border-gray-300 my-4 p-2"></div>

    <div className='flex flex-row'>
      {/* Grid Section */}
      <div className="grid grid-cols-2 gap-4  ">
      {activeButton === 1 && (
    <>
      {/* Grid Item 1 */}
      <div className="bg-white p-2 rounded-md shadow-md flex items-center gap-2">
        {/* Image */}
        <img src="images/brac_bank.webp" alt="Item 1" className="w-20 h-28" />
        {/* Title and Subtitle */}
        <div>
          <h3 className="text-base font-semibold mb-1">Brac Bank Private Limited</h3>
          <p className="text-xs text-gray-700">Subtitle for item 1</p>
        </div>
      </div>
      {/* Grid Item 2 */}
      <div className="bg-white p-2 rounded-md shadow-md flex items-center gap-2">
        {/* Image */}
        <img src="images/jbl.png" alt="Item 1" className="w-20 h-28" />
        {/* Title and Subtitle */}
        <div>
          <h3 className="text-base font-semibold mb-1">Janata Bank Private Limited</h3>
          <p className="text-xs text-gray-700">Subtitle for item 1</p>
        </div>
      </div>
      {/* Grid Item 3 */}
      <div className="bg-white p-2 rounded-md shadow-md flex items-center gap-2">
        {/* Image */}
        <img src="images/ific.png" alt="Item 1" className="w-20 h-28" />
        {/* Title and Subtitle */}
        <div>
          <h3 className="text-base font-semibold mb-1">IFIC Bank Private Limited</h3>
          <p className="text-xs text-gray-700">Subtitle for item 1</p>
        </div>
      </div>
      {/* Grid Item 4 */}
      <div className="bg-white p-2 rounded-md shadow-md flex items-center gap-2">
        {/* Image */}
        <img src="images/ucb.jpeg" alt="Item 1" className="w-20 h-28" />
        {/* Title and Subtitle */}
        <div>
          <h3 className="text-base font-semibold mb-1">UCB Private Limited</h3>
          <p className="text-xs text-gray-700">Subtitle for item 1</p>
        </div>
      </div>


    </>
  )}
        {activeButton === 2 && (
              <>
              {/* Grid Item 21 */}
              <div className="bg-white p-2 rounded-md shadow-md flex items-center gap-2">
                {/* Image */}
                <img src="images/pub.png" alt="Item 1" className="w-20 h-28" />
                {/* Title and Subtitle */}
                <div>
                  <h3 className="text-base font-semibold mb-1">Pubali Bank Private Limited</h3>
                  <p className="text-xs text-gray-700">Subtitle for item 1</p>
                </div>
              </div>
              {/* Grid Item 22 */}
              <div className="bg-white p-2 rounded-md shadow-md flex items-center gap-2">
                {/* Image */}
                <img src="images/prime.png" alt="Item 1" className="w-20 h-28" />
                {/* Title and Subtitle */}
                <div>
                  <h3 className="text-base font-semibold mb-1">Prime Bank Private Limited</h3>
                  <p className="text-xs text-gray-700">Subtitle for item 1</p>
                </div>
              </div>
              {/* Grid Item 23 */}
              <div className="bg-white p-2 rounded-md shadow-md flex items-center gap-2">
                {/* Image */}
                <img src="images/one.png" alt="Item 1" className="w-20 h-28" />
                {/* Title and Subtitle */}
                <div>
                  <h3 className="text-base font-semibold mb-1">One Bank Private Limited</h3>
                  <p className="text-xs text-gray-700">Subtitle for item 1</p>
                </div>
              </div>
              {/* Grid Item 24 */}
              <div className="bg-white p-2 rounded-md shadow-md flex items-center gap-2">
                {/* Image */}
                <img src="images/pre.png" alt="Item 1" className="w-20 h-28" />
                {/* Title and Subtitle */}
                <div>
                  <h3 className="text-base font-semibold mb-1">Premire Private Limited</h3>
                  <p className="text-xs text-gray-700">Subtitle for item 1</p>
                </div>
              </div>
        
        
            </>
        )}
        {activeButton === 3 && (
              <>
              {/* Grid Item 31 */}
              <div className="bg-white p-2 rounded-md shadow-md flex items-center gap-2">
                {/* Image */}
                <img src="images/ebl.png" alt="Item 1" className="w-20 h-28" />
                {/* Title and Subtitle */}
                <div>
                  <h3 className="text-base font-semibold mb-1">Eastern Bank Private Limited</h3>
                  <p className="text-xs text-gray-700">Subtitle for item 1</p>
                </div>
              </div>
              {/* Grid Item 32 */}
              <div className="bg-white p-2 rounded-md shadow-md flex items-center gap-2">
                {/* Image */}
                <img src="images/pub.png" alt="Item 1" className="w-20 h-28" />
                {/* Title and Subtitle */}
                <div>
                  <h3 className="text-base font-semibold mb-1">Pubali Bank Private Limited</h3>
                  <p className="text-xs text-gray-700">Subtitle for item 1</p>
                </div>
              </div>
              {/* Grid Item 33 */}
              <div className="bg-white p-2 rounded-md shadow-md flex items-center gap-2">
                {/* Image */}
                <img src="images/city.png" alt="Item 1" className="w-20 h-28" />
                {/* Title and Subtitle */}
                <div>
                  <h3 className="text-base font-semibold mb-1">City Bank Private Limited</h3>
                  <p className="text-xs text-gray-700">Subtitle for item 1</p>
                </div>
              </div>
              {/* Grid Item 34 */}
              <div className="bg-white p-2 rounded-md shadow-md flex items-center gap-2">
                {/* Image */}
                <img src="images/ucb.jpeg" alt="Item 1" className="w-20 h-28" />
                {/* Title and Subtitle */}
                <div>
                  <h3 className="text-base font-semibold mb-1">UCB Private Limited</h3>
                  <p className="text-xs text-gray-700">Subtitle for item 1</p>
                </div>
              </div>
        
        
            </>
        )}
      </div>
      
      </div>
      </div>
      <div className="w-2/3 hidden md:block px-6">
      <div className="mt-8 pb-16">
      <div className="mb-4">
        <h1 className=" text-sm md:text-xl lg:text-2xl px-2 font-semibold">
        <span className='text-red-500'>Confused</span> on which bank to choose for your Home Loan ?
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 ">
        {services.map(({ id, name, icon, text }) => (
          <div
            className="p-3 text-center rounded-lg hover:card-shadow hover:border-t-4 hover:border-t-primary dark:hover:bg-card-dark"
            key={id}
          >
            <div className="icon-box !opacity-100 !w-14 !h-14 mx-auto !bg-primary/20 text-primary hover:!bg-primary hover:text-white">
              <div className="text-2xl"> {icon}</div>
            </div>
            <h1 className="mt-2 heading !text-xl">{name}</h1>
            <p className="mt-2">{text}</p>
          </div>
        ))}
      </div>
    </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Bank;
