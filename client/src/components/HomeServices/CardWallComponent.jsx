import React, { useState } from 'react';
import PopupModalWallPaint from './PopupModalWallPaint';
import PopupModalWallPainttwo from './PopupModalWallPainttwo';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignInPopUp from '../auth/SignInPopUp';

const CardWallComponent = () => {
  const [modalOpen, setModalOpen] = useState(Array(2).fill(false));
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalamount = useSelector(state => state.cart.totalAmount);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);


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

  
  const handleProceedToCart = () => {
  
    navigate('/painting-wall-services/cart');
  };

  

  const cardsData = [
    { 
      id: '0',
      picture: 'property1.jpg', 
      title: '1 Wall', 
      originalCost: '৳ 3883',
      newCost: '৳ 2500',
      subtitle: (
        <ul className="list-disc pl-6">
          <li>Available in 2 options: with and without primer</li>
          <li>Repair flaking off or curling up of paint</li>
          <li>Filling of cracks and gaps in wall</li>
        </ul>
      ),
      buttonName: 'Show More', 
      buttonName2: 'ADD', 
      buttonLink: '/button1-link',
      buttonLink2: '/button12-link',
      popup: <PopupModalWallPaint isOpen={modalOpen[0]} onClose={() => closeModal(0)} />, 
      popup2: <SignInPopUp isOpen={modalOpen[0]} onClose={() => closeModal(0)} /> 
    },
    { 
      id: '1',
      picture: 'paint.webp', 
      title: '2 Walls',
      originalCost: '৳ 6700',
      newCost: '৳ 4500',
      subtitle: (
        <ul className="list-disc pl-6">
          <li>Available in 2 options: with and without primer</li>
          <li>Repair flaking off or curling up of paint</li>
          <li>Filling of cracks and gaps in wall</li>
        </ul>
      ),
      buttonName: 'Show More', 
      buttonName2: 'ADD', 
      buttonLink: '/button2-link',
      buttonLink2: '/button2-link',
      popup: <PopupModalWallPainttwo isOpen={modalOpen[1]} onClose={() => closeModal(1)}  /> ,
      popup2: <SignInPopUp isOpen={modalOpen[1]} onClose={() => closeModal(1)}  />
    }
  ];

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-12 gap-4  bg-sky-50">
      
      <div className='w-full md:w-2/3 '>
        <h1 className='text-xl md:text-2xl text-gray-500 py-6 md:mx-4 '>Painting Wall Service</h1>
        {cardsData.map((card, index) => (
          <div key={index} className="max-w-3xl md:mx-4 p-4 overflow-hidden rounded-lg shadow-2xl mb-12 bg-white">
            <div className="relative">
              <img className="w-full h-48 object-cover" src={`/images/${card.picture}`} alt={`Picture ${index + 1}`} />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-30" />
            </div>
            <div className="md:px-6  py-4">
              <div className='flex justify-between'>
                <p className=" text-gray-700 p-4 font-bold text-lg md:text-xl ">{card.title}</p>
                <p className='p-4'>
                  <span className="text-gray-500 text-xs mr-1">Starts from</span>
                  <del className="text-gray-500 text-xs"> {card.originalCost}</del>
                  <span className="ml-2 text-emerald-700 font-semibold">{card.newCost}</span>
                </p>
              </div>
              <div className="text-gray-500 text-sm font-questrial">{card.subtitle}</div>
            </div>
            <div className={`flex px-6 py-4 mb-2 gap-6 justify-end items-end`}>
              <button className="bg-[#E6F5F3] text-[#009587] hover:text-[#0E7068]  font-semibold text-sm md:text-md  py-2 px-4 rounded-lg" style={{ border: "1px solid #009587" }} onClick={() => openModal(index)}> {card.buttonName2}</button>
              { currentUser ? modalOpen[index] && card.popup : modalOpen[index] && card.popup2} 
            </div>
          </div>
        ))}
      </div>

      <div className=' w-full md:w-1/3 mt-20 '>
        {cartItems.length !==0 && (
        <div className='px-4 py-6 bg-white rounded-md'>
            <h1 className='text-2xl text-gray-500 font-poppins pb-4 border-b-[1px] p-4 border-gray-400'>Order Summary</h1>
            <ul className=''>
            {cartItems.map((item, index) => (
              <li className='p-4 text-sm text-gray-600 flex justify-between gap-4' key={index}>
                <span>{item.title}</span>
                <span className="flex items-center">
                <span className="mr-1">৳</span>
                {item.newCost}
              </span>
              </li>
            ))}

            <li className='p-4 mt-4 border-t-[1px] border-gray-400 flex justify-between gap-4'>
              <span>Total Amount</span>
              <span className="flex items-center">
                <span className="mr-1">৳</span>
                {totalamount}
                </span>
              </li>
            </ul>
            <div className={"py-4 mb-2  w-full"}>
              <button onClick={handleProceedToCart}   className="text-white mt-4 w-full bg-[#009587] hover:bg-[#0E7068]   font-semibold text-sm md:text-md  py-2 px-4 rounded-lg" style={{ border: "1px solid #009587" }} > Proceed</button>
              
            </div>
        </div>
        )}

        
      </div>

      
    </div>
  );
};

export default CardWallComponent;
