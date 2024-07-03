import { FaHandHoldingUsd } from "react-icons/fa";
import { Link } from "react-router-dom";

const CheckEligibility = () => {
  return (
    <div className="hidden md:block">
      {/* First Section */}
      <div className="bg-[#384D6C] py-4">
        <div className="container mx-auto flex items-center justify-center px-4">
          <div className="flex items-center">
            {/* React icon */}
            <FaHandHoldingUsd className="text-white mr-2" size={24} />

            {/* Title */}
            <p className="text-[#FFFF]">Do you know how much <strong>loan</strong> you can get? Get maximum with <strong>NoMedeia</strong></p>
          </div>

          {/* Button */}
          <button className="rounded-md bg-white text-sm text-black px-4 py-1 ml-4">Check Eligibility</button>
        </div>
      </div>

      {/* Second Section */}
      <div className="py-8 px-16">
        <div className="container ">
          <div className="flex gap-24">
            {/* Icon 1 */}
            <Link to="/build-home" className="flex flex-col items-center mr-8 focus:outline-none">
            <img src="/images/builderProperties.png" alt="Builder Projects" className="w-16 h-16 hover:scale-110 transition-transform rounded-md" />
            <p className="mt-2 text-black dark:text-white">Builder Projects</p>
          </Link>

            {/* Icon 2 */}
            <button className="flex flex-col items-center mr-8 focus:outline-none">
              <img src="/images/salesagreement.png" alt="Sale Agreement" className="w-16 h-16 hover:scale-110 transition-transform rounded-md" />
              <p className="mt-2 text-black dark:text-white">Sale Agreement</p>
            </button>

            {/* Icon 3 */}
            <button className="flex flex-col items-center mr-8 focus:outline-none">
              <img src="/images/loan.png" alt="Home Loan" className="w-16 h-16 hover:scale-110 transition-transform rounded-md" />
              <p className="mt-2 text-black dark:text-white">Home Loan</p>
            </button>

            {/* Icon 4 */}
            <button className="flex flex-col items-center mr-8 focus:outline-none">
              <img src="/images/legalservice.png" alt="Property Legal Services" className="w-16 h-16 hover:scale-110 transition-transform rounded-md" />
              <p className="mt-2 text-black dark:text-white">Property Legal Services</p>
            </button>
             {/* Icon 5 */}
             <button className="flex flex-col items-center focus:outline-none">
              <img src="/images/interiors.svg" alt="Home Interiors" className="w-16 h-16 hover:scale-110 transition-transform rounded-md" />
              <p className="mt-2 text-black dark:text-white">Home Interiors</p>
            </button>
            {/* Icon 6 */}
            <button className="flex flex-col items-center focus:outline-none">
              <img src="/images/nrb.png" alt="Home Interiors" className="w-16 h-16 hover:scale-110 transition-transform rounded-md" />
              <p className="mt-2 text-black dark:text-white">NoMedia For NRBs</p>
            </button>
            
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center py-16 ">
        <div className="line  flex-grow border-t border-gray-500"></div>
        <div className="h-6 w-6 rounded-full  mr-6 border-[1px] border-primary"></div>

        <h1 className="text-semibold text-4xl relative">Why Use NoMedia</h1>
        <div className="h-6 w-6 rounded-full ml-6 border-[1px] border-primary"></div>
        <div className="line flex-grow border-t border-gray-500"></div>
     </div>

      {/* 3rd section */}
      <div className=" py-8 flex justify-center items-center px-6">
        <div className="container ">
          <div className="flex gap-24">
            {/* Icon 1 */}
            <div className="flex flex-col items-center">
              <img src="/images/media.png" alt="Builder Projects" className="w-20 h-20 hover:scale-125 transition-transform" />
              <h2 className="mt-4 text-black dark:text-white text-lg whitespace-nowrap">Avoid Media</h2>
              <p className="mt-2 text-black dark:text-white whitespace-normal text-center">We directly connect you to verified owners to save brokerage</p>
            </div>

            {/* Icon 2 */}
            <div className="flex flex-col items-center ">
              <img src="/images/salesagreement.png" alt="Sale Agreement" className="w-20 h-20 hover:scale-125 transition-transform" />
              <h2 className="mt-4 text-black dark:text-white text-lg whitespace-nowrap">Rental Agreement</h2>
               <p className="mt-2 text-black dark:text-white whitespace-normal text-center">Assistance in creating Rental agreement & Paper work</p>
            </div>

            {/* Icon 3 */}
            <div className="flex flex-col items-center">
              <img src="/images/listing.png" alt="Home Loan" className="w-20 h-20 hover:scale-125 transition-transform" />
              <h2 className="mt-4 text-black dark:text-white text-lg whitespace-nowrap">Free Listing</h2>
               <p className="mt-2 text-black dark:text-white whitespace-normal text-center">Easy listing process.Also using WhatsApp</p>
            </div>

            {/* Icon 4 */}
            <div className="flex flex-col items-center">
              <img src="/images/shortlist.png" alt="Property Legal Services" className="w-20 h-20 hover:scale-125 transition-transform" />
              <h2 className="mt-4 text-black dark:text-white text-lg whitespace-nowrap">Shortlist Without Visit</h2>
               <p className="mt-2 text-black dark:text-white whitespace-normal text-center">Extensive Information makes it easy</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckEligibility;
