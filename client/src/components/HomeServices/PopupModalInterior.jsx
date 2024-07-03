import React, { useEffect, useState } from 'react';
import { TiTick } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { FaHome, FaRuler, FaClock, FaCheckCircle } from "react-icons/fa";
import MultiStepForm from '../FormPopup/MultiStepForm';
const PopupModalInterior = ({ isOpen, onClose }) => {
  // Define mapping between titles, subtitles, and corresponding icons
  const flowChartItems = [
    {
      title: "Book Home Inspection",
      subtitle: "Tell us preferred time to book",
      Icon: FaHome,
    },
    {
      title: "Measure & Estimate",
      subtitle: "Get accurate quotes with laser measurements",
      Icon: FaRuler,
    },
    {
      title: "Project Initiation",
      subtitle: "Guaranteed on time project initiation and completion",
      Icon: FaClock,
    },
    {
      title: "Cleaning & Quality Check",
      subtitle: "Post paint cleanup and quality check",
      Icon: FaCheckCircle,
    },
  ];



  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    //onClose();
    setPopupOpen(true);
    
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    onClose();
  };



  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.m') && !event.target.closest('.modal')) {
        onClose(); // Close modal when clicking outside of it
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
      document.addEventListener('mousedown', handleOutsideClick);
      
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    }
   

    return () => {
      document.body.style.overflow = 'auto'; // Make sure scrolling is re-enabled when component unmounts
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phoneNumber: '+880',
      address: '',
      message: '',
      agreeTerms: false
    });
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
      <div className=" max-h-[calc(100vh-200px)] md:max-h-[calc(100vh-100px)] overflow-y-auto  bg-white  rounded-2xl w-full max-w-xl">
      {!isPopupOpen && (
              <>
              <div className='modal p-8'>
      {/* <div className="flex justify-end"> 
      <button className="bg-[#F6F6F6] rounded-full" onClick={onClose}>
        <IoCloseOutline className='text-black p-1' size={28} />
      </button>
    </div> */}

          <div className="relative ">
            <img className="w-full rounded-t-md h-48 object-cover" src={`/images/property1.jpg`} alt={`Interior`}  />
            <div className="absolute bottom-0 left-0 w-full h-full rounded-t-md bg-black bg-opacity-30  ">
            
                  </div>
                  <div className="absolute bottom-0 left-0 w-full text-white p-4 font-bold text-xl ">Interior Painting</div>
            
            </div>
            <div className=" py-6">
              
              <p className="text-gray-500 text-sm font-questrial ">Refreshing your home's paint and interior decor is
               important from time to time to make them more visually appealing and extend its lifespan</p>
            </div>


        <p className="text-xl  mb-4  text-[#1A202C]">How painting service works</p>

        <div className="flex flex-col gap-">
      {flowChartItems.map(({ title, subtitle, Icon }, index) => (
        <div key={index} className="flex items-start gap-4 py-2">
          <div className='flex flex-col'>
          <div className='bg-[#F6F6F6] p-3 rounded-full'>
            <Icon className='text-black ' size={24}/>
           </div>
           {index < 3 && <div className="border-l-2 border-black border-dotted h-4 mx-6 mt-4"></div>}
           </div>
          <div className={`${index < 3 ?'mt-[5px]':''}`}>
            <p className="text-sm text-[#1A202C]">{title}</p>
            <p className="text-gray-500 text-xs font-questrial">{subtitle}</p>
          </div>
        </div>
      ))}
    </div>


    <div className=" bg-sky-100 flex justify-between items-center mt-8 mx-auto p-8 rounded-md">
      {/* Left side with title and bullet points */}
      <div className="w-2/3 ">
      <p className="text-md  mb-4 text-cyan-800">Get Estimate to know Cost</p>
        <ul className="list-disc pl-4 space-y-2  text-xs font-questrial text-cyan-800">
          <li >Top Quality Paints</li>
          <li>Inspection with Expert Consultation</li>
          <li>Experienced and Trained Partners</li>
        </ul>
      </div>
      {/* Right side with the image */}
      <div className="w-auto">
        <img src="/images/PaintingCal.svg" alt="Image Description" className="h-24 w-24" />
      </div>
    </div>


  <div className="my-8">
  <h2 className="text-lg font-semibold mb-4">Estimated interior painting cost*</h2>
  
  <table className=" table-auto w-full text-center shadow-md">
    <thead>
      <tr className=' bg-[#F5F5F5] text-md'>
        <th className="border px-4 py-2">BHK Type</th>
        <th className="border px-4 py-2">Starting At</th>
        <th className="border px-4 py-2">Tentative Time</th>
      </tr>
    </thead>
    <tbody className='text-gray-600 font-poppins text-sm'>
      <tr>
        <td className="border px-4 py-2">1 BHK</td>
        <td className="border px-4 py-2">৳ 3,500</td>
        <td className="border px-4 py-2">1-2 Days</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">2 BHK</td>
        <td className="border px-4 py-2">৳ 6,000</td>
        <td className="border px-4 py-2">2-3 Days</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">3 BHK</td>
        <td className="border px-4 py-2">৳ 9,000</td>
        <td className="border px-4 py-2">4-5 Days</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">4+ BHK</td>
        <td className="border px-4 py-2">৳ 11,000</td>
        <td className="border px-4 py-2">4-7 Days</td>
      </tr>
    </tbody>
  </table>
  <p className=' mt-4 text-xs text-right text-gray-400  font-questrial'>*Actual price depends on wall area.</p>
</div>


<div className="my-8 mb-20">
  <h2 className="text-lg font-semibold mb-4">Why BROKERFREE ?</h2>
  
  <div className="rounded-lg overflow-hidden">
  <table className="table-auto w-full text-center rounded-lg">
      <thead>
        <tr className='bg-[#F5F5F5] text-md'>
          <th className="border-r  border-teal-500 px-4 py-2">Services</th>
          <th className="border-r border-t border-teal-500 px-4 py-2">Brokerfree Promise</th>
          <th className="border  px-4 py-2">Local Vendor</th>
        </tr>
      </thead>
      <tbody className='text-gray-600 font-poppins text-xs border border-x-teal-500 border-b-teal-500'>
        <tr>
          <td className=" border-r border-teal-500 px-4 py-2 text-left ">{"\u2022 "}&nbsp;Genuine Branded Paints</td>
          <td className="border-r border-teal-500 py-2 text-teal-500 ">✓</td>
          <td className=" px-4 py-2 text-red-500 ">X</td>
        </tr>
        <tr>
          <td className="border-r border-teal-500  px-4 py-2 text-left">{"\u2022 "}&nbsp;End to End Managed</td>
          <td className="border-r border-teal-500  px-4 py-2 text-teal-500 ">✓</td>
          <td className=" px-4 py-2 text-red-500 ">X</td>
        </tr>
        <tr>
          <td className="border-r border-teal-500  px-4 py-2 text-left">{"\u2022 "}&nbsp;Wall Health Checkup</td>
          <td className="border-r border-teal-500  px-4 py-2 text-teal-500 ">✓</td>
          <td className=" px-4 py-2 text-red-500 ">X</td>
        </tr>
        <tr>
          <td className="border-r border-teal-500  px-4 py-2 text-left">{"\u2022 "}&nbsp; Material + Labor Cost Included</td>
          <td className="border-r border-teal-500  px-4 py-2 text-teal-500 ">✓</td>
          <td className=" px-4 py-2 text-red-500 ">X</td>
        </tr>
        <tr>
          <td className="border-r border-teal-500  px-4 py-2 text-left">{"\u2022 "}&nbsp; Professionally Trained Painters</td>
          <td className="border-r border-teal-500  px-4 py-2 text-teal-500 ">✓</td>
          <td className=" px-4 py-2 text-red-500 ">X</td>
        </tr>
        <tr>
          <td className="border-r border-teal-500  px-4 py-2 text-left">{"\u2022 "}&nbsp; Furniture and Electrical Outlets Masking</td>
          <td className="border-r border-teal-500  px-4 py-2 text-teal-500 ">✓</td>
          <td className=" px-4 py-2 text-red-500 ">X</td>
        </tr>
        <tr>
          <td className="border-r border-teal-500  px-4 py-2 text-left">{"\u2022 "}&nbsp; Post Painting Cleanup</td>
          <td className="border-r border-teal-500  px-4 py-2 text-teal-500 ">✓</td>
          <td className=" px-4 py-2 text-red-500 ">X</td>
        </tr>
        <tr>
          <td className="border-r border-teal-500  px-4 py-2 text-left">{"\u2022 "}&nbsp; On-time Completion</td>
          <td className="border-r border-teal-500  px-4 py-2 text-teal-500 ">✓</td>
          <td className=" px-4 py-2 text-red-500 ">X</td>
        </tr>
        <tr>
          <td className="border-r border-teal-500  px-4 py-2 text-left">{"\u2022 "}&nbsp; Free Insurance for damages of upto Bdt. 10,000</td>
          <td className="border-r border-teal-500  px-4 py-2 text-teal-500 ">✓</td>
          <td className=" px-4 py-2 text-red-500 ">X</td>
        </tr>
        <tr>
          <td className="border-r border-teal-500  px-4 py-2 text-left">{"\u2022 "} &nbsp;1 Year Service Warranty against chipping and bubbling</td>
          <td className="border-r border-b border-teal-500  px-4 py-2 text-teal-500 ">✓</td>
          <td className=" px-4 py-2 text-red-500 ">X</td>
        </tr>
      </tbody>
    </table>
  </div>
 
</div>
        </div>

        </>
        )}
{/* This is bottom button  */}
<div className="m bg-white border-t border border-gray-100 shadow-md rounded-t-2xl py-2 px-4 -mt-4  sticky bottom-0 left-0 right-0 z-50 flex justify-between items-center">
<MultiStepForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    <button className="text-white mt-4  bg-[#009587] hover:bg-[#0E7068]  font-semibold text-sm md:text-md  py-2 px-4 mb-2 rounded" onClick={handleOpenPopup }>Get Free Estimate</button>
    
</div>




</div>

</div>
  );
};

export default PopupModalInterior;
