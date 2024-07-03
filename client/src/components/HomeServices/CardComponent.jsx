import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import PopupModalInterior from './PopupModalInterior';
import PopupModal from '../GroupShare/PopupModal';
import MultiStepForm from '../FormPopup/MultiStepForm';

const CardComponent = () => {
  const [modalOpen, setModalOpen] = useState(Array(5).fill(false)); // Initialize an array of state variables for each popup

  const openModal = (index) => {
    const updatedModalOpen = [...modalOpen];
    updatedModalOpen[index] = true;
    setModalOpen(updatedModalOpen);
  };

  const closeModal = (index) => {
    const updatedModalOpen = [...modalOpen];
    updatedModalOpen[index] = false;
    setModalOpen(updatedModalOpen);
  };
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const cardsData = [
    { 
      id:'0',
      picture: 'property1.jpg', 
      title: 'Interior Painting', 
      subtitle: (
        <ul>
          <li className='flex items-center text-md'><TiTick className='mr-2' /> Professional Painters for Perfect Finish</li>
          <li className='flex items-center'><TiTick className='mr-2'/> On-site visit for Painting Estimate</li>
          <li className='flex items-center'><TiTick className='mr-2'/> 1-Year Service Warranty</li>
        </ul>
      ),
      buttonName: 'Show More', 
      buttonName2: 'GET FREE ESTIMATE', 
      buttonLink: '/button1-link',
      buttonLink2: '/button12-link',
      popup: <PopupModalInterior isOpen={modalOpen[0]} onClose={() => closeModal(0)} /> 
    },
    { 
      id:'1',
      picture: 'paint.webp', 
      title: 'Exterior Painting', 
      subtitle: (
        <ul>
          <li className='flex items-center text-md'><TiTick className='mr-2' /> Transform the home's exterior</li>
          <li className='flex items-center'><TiTick className='mr-2'/> Prevent and repair cracks on walls</li>
          <li className='flex items-center'><TiTick className='mr-2'/> Protect your house from harsh weather elements</li>
        </ul>
      ),
      buttonName: 'Show More', 
      buttonName2: 'GET FREE ESTIMATE', 
      buttonLink: '/button2-link',
      buttonLink2: '/button2-link',
      popup: <PopupModalInterior isOpen={modalOpen[1]} onClose={() => closeModal(1)} />  
    },
    { 
      
      id:'2',
      picture: 'property3.jpeg', 
      title: 'Water proofing', 
      subtitle: (
        <ul>
          <li className='flex items-center text-md'><TiTick className='mr-2' />Protect your house from mould</li>
          <li className='flex items-center'><TiTick className='mr-2'/> Get seepage free terrace</li>
          <li className='flex items-center'><TiTick className='mr-2'/> On site consultation</li>
        </ul>
      ), 
      buttonName: 'Show More',
      buttonName2: 'GET FREE ESTIMATE',  
      buttonLink: '/button3-link',
      buttonLink2: '/button32-link',
      popup: <PopupModal isOpen={modalOpen[2]} onClose={() => closeModal(2)} /> 
    },
    { 
      id:'5',
      picture: 'property4.jpg', 
      title: 'One wall painting', 
      subtitle: (
        <ul>
          <li className='flex items-center text-md'><TiTick className='mr-2' /> Quick drying and Complete coverage</li>
          <li className='flex items-center'><TiTick className='mr-2'/> Hassle-free 1 day service</li>
          <li className='flex items-center'><TiTick className='mr-2'/>Starting at only 2599/-</li>
        </ul>
      ), 
      buttonName2: 'CHECK PRICES', 
      buttonLink: '/button4-link', 
      buttonLink2: '/button42-link',
      popup: <PopupModal isOpen={modalOpen[3]} onClose={() => closeModal(3)} />
    },
    { 
      id: '3',
      picture: 'property8.jpg', 
      title: 'Rental Painting', 
      subtitle: (
        <ul className=''>
          <li className='flex items-center text-md'><TiTick className='mr-2' /> Budget paints starting at 5 bdt/sq.ft.</li>
          <li className='flex items-center'><TiTick className='mr-2'/> Complete Post Painting Cleanup</li>
          <li className='flex items-center'><TiTick className='mr-2'/> 1-2 Day Quick Service</li>
        </ul>
      ),
      buttonName: 'Show More', 
      buttonName2: 'GET FREE ESTIMATE', 
      buttonLink: '/button5-link', 
      buttonLink2: '/button52-link',
      popup: <PopupModal isOpen={modalOpen[4]} onClose={() => closeModal(4)} />
    }
  ];

  return (
    <div className="flex flex-col p-4 md:p-12  gap-12 bg-sky-50">
      <div>
        <h1 className='text-xl md:text-2xl text-gray-500 md:mx-24'>Painting choices for your home</h1>
      </div>
      {cardsData.map((card, index) => (
        <div id={`paintsection${card.id}`} key={index} className="max-w-3xl overflow-hidden md:mx-24 rounded-lg shadow-2xl bg-white">
          <div className="relative">
            <img className="w-full h-48 object-cover" src={`/images/${card.picture}`} alt={`Picture ${index + 1}`} />
            <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-30" />
            <div className="absolute bottom-0 left-0 w-full text-white p-4 font-bold text-xl ">{card.title}</div>
          </div>
          <div className="px-6 mt-4 py-4">
            <p className="text-gray-500 text-sm font-questrial">{card.subtitle}</p>
          </div>
          <div className={`flex px-6 py-4 mb-2 gap-6 ${index !== 3 ? 'justify-between  items-end' : 'justify-end items-end'}`}>
            {index !== 3 && (
              <>
                {/* Render first button and its corresponding popup */}
                <button type='submit' className='relative overflow-hidden group' onClick={() => openModal(index)}>
                  <div className='bg-black px-6 text-white text-sm md:text-md py-2 rounded group-hover:bg-gray-800 transition-colors duration-200 group-hover:px-8'>
                    Show More
                  </div>
                  <MdArrowOutward className='absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 text-white transition-opacity duration-200 group-hover:opacity-100 mr-2 ' size={24} />
                </button>
                {modalOpen[index] && card.popup}
              </>
            )}
            <button className="bg-[#E6F5F3] text-[#009587] hover:text-[#0E7068]  font-semibold text-sm md:text-md  py-2 px-4 rounded" style={{ border: "1px solid #009587" }} onClick={handleOpenPopup}>{card.buttonName2}</button>
            {index === 3 && (<MultiStepForm isOpen={isPopupOpen} onClose={handleClosePopup} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;
