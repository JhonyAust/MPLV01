import React, { useState,useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { IoCloseOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";




const MultiStepForm = ({ isOpen, onClose}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const titles = [
    "Choose Service Location",
    "Schedule Your Service",
    "Share Your Details With Us"
  ];
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const handleSubmit = () => {
    // Handle form submission with all form data
    console.log('Form submitted:', formData);
    onClose(); // Close the popup modal
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.m')) {
        onClose(); // Close modal when clicking outside of it
      }
    };
  
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    }
  
    // Clean-up function to remove the event listener and restore scrolling behavior
    return () => {
      document.body.style.overflow = 'auto'; // Make sure scrolling is re-enabled when component unmounts
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);
  


  return (
    <div>
      {isOpen && (
        <div className="modal-overlay z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
          <div className="m max-h-[calc(100vh-100px)] overflow-y-auto bg-white  rounded-xl w-full max-w-xl relative">
         
            {/* Upper section with title */}
            <div className="flex justify-between bg-white  border-b shadow-md border-gray-200 mb-4 p-4 sticky top-0 left-0 right-0 z-50">
              <div><h2 className="text-xl font-bold">{titles[currentStep - 1]}</h2></div>
              <div className=""> 
                <button className="bg-[#F6F6F6] rounded-full" onClick={onClose}>
                    <IoCloseOutline className='text-black p-1' size={28} />
                </button>
            </div>
            </div>
            
            <div className=' p-8'>
            {/* Render the appropriate step based on the currentStep state */}
            {currentStep === 1 && <Step1 onNext={handleNextStep} onFormData={handleFormData} />}
            {currentStep === 2 && <Step2 onNext={handleNextStep} onPrev={handlePrevStep} onFormData={handleFormData} />}
            {currentStep === 3 && <Step3 onSubmit={handleSubmit} onPrev={handlePrevStep} onFormData={handleFormData} />}
            </div>
            {/* Bottom section */}
            <div className={`bg-white border-t border border-gray-100 shadow-md rounded-t-2xl p-4 px-8 ${currentStep===1 ? "mt-20":"mt-4"}  sticky bottom-0 left-0 right-0 z-40 flex justify-between items-center`}>
                <div>
                    {currentStep > 1 && (
                    <button onClick={handlePrevStep} className=" py-2 rounded-full text-gray-700 focus:outline-none">
                        <GrPrevious className='text-black' size={18}/>
                    </button>
                    )}
                </div>
                <div className="flex-grow flex   justify-center">
                    {currentStep < 3 ? (
                    <button onClick={handleNextStep} className="bg-gray-800 text-white font-bold px-12 py-2 rounded-md hover:bg-gray-700 focus:outline-none">
                        Proceed
                    </button>
                    ) : (
                    <button onClick={handleSubmit} type="submit" className="relative overflow-hidden group">
                        <div className="bg-black px-12 text-white  font-bold py-2 rounded group-hover:bg-gray-800  transition-colors duration-200 group-hover:px-16">
                        Submit
                        </div>
                        <MdArrowOutward className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 text-white transition-opacity duration-200 group-hover:opacity-100 mr-4" size={24} />
                    </button>
                    )}
                </div>
                </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
