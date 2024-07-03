import React, { useEffect, useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { MdAdd, MdRemove } from "react-icons/md";
import { useDispatch,useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../features/cartSlice';

const PopupModalWallPaint = ({ isOpen, onClose}) => {
  const [quantities, setQuantities] = useState(Array(4).fill(0));
  const [totalamount, setTotalAmount] = useState(0);
  const [addedToCart, setAddedToCart] = useState(Array(4).fill(false));
  const cartItems = useSelector(state => state.cart.cartItems);

  const dispatch = useDispatch();

  const handleAddToCart = (title, newCost) => {
    dispatch(addToCart({ title: 'One Wall Painting ' + title, newCost }));

  };

  const handleRemoveToCart = (title, newCost) => {
    dispatch(removeFromCart({ title: 'One Wall Painting ' + title, newCost }));
  };


  const handleAdd = (index, cost) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
    setTotalAmount((prevTotal) => prevTotal + parseFloat(cost.replace('৳', '').replace(',', '').trim()));
    setAddedToCart((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleRemove = (index, cost) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
      setQuantities(newQuantities);
      setTotalAmount((prevTotal) => prevTotal - parseFloat(cost.replace('৳', '').replace(',', '').trim()));
      if (newQuantities[index] === 0) {
        setAddedToCart((prev) => {
          const newState = [...prev];
          newState[index] = false;
          return newState;
        });
      }
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.m')) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const products = [
    {
      title: 'Tractor Emulsion Double Coat Without Primer',
      originalCost: '৳ 3,883',
      newCost: '৳ 2,632',
    },
    {
      title: 'Tractor Emulsion Double Coat With Primer',
      originalCost: '৳ 4,118',
      newCost: '৳ 2,791',
    },
    {
      title: 'Premium Emulsion Double Coat Without Primer',
      originalCost: '৳ 4,177',
      newCost: '৳ 2,832',
    },
    {
      title: 'Premium Emulsion Double Coat With Primer',
      originalCost: '৳ 4,411',
      newCost: '৳ 2,990',
    },
  ];

 

  if (!isOpen) return null;

  return (
    <div className="modal-overlay z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="m max-h-[calc(100vh-100px)] overflow-y-auto bg-white rounded-s-xl w-full max-w-md">
        <div className="flex justify-between bg-white border-b shadow-md border-gray-200 mb-4 p-4 sticky top-0 left-0 right-0 z-50">
          <div>
            <p className="text-2xl font-semibold text-[#1A202C]">1 Wall</p>
          </div>
          <div className="">
            <button className="bg-[#F6F6F6] rounded-full" onClick={onClose}>
              <IoCloseOutline className='text-black p-1' size={28} />
            </button>
          </div>
        </div>
        <div className='p-4'>
          <div className="flex flex-col p-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="flex justify-between gap-4 items-center">
                <div>
                  <h2 className="text-md">{product.title}</h2>
                  <p>
                    <del className="text-gray-500">{product.originalCost}</del>
                    <span className="ml-2 text-emerald-700">{product.newCost}</span>
                  </p>
                </div>
                <div className='flex items-center'>
                  {addedToCart[index] ? (
                    <>
                      <button onClick={() =>{
                         handleRemove(index, product.newCost);
                         handleRemoveToCart(product.title, product.newCost);}} 
                         className="bg-[#E6F5F3] text-[#009587] hover:text-[#0E7068] font-semibold py-1 px-2 text-xs rounded-lg" style={{ border: "1px solid #009587" }}>
                        <MdRemove />
                      </button>
                      <span className="mx-2">{quantities[index]}</span>
                        <button onClick={() => {
                        handleAdd(index, product.newCost);
                        handleAddToCart(product.title, product.newCost);
                      }}
                      className="bg-[#E6F5F3] text-[#009587] hover:text-[#0E7068] font-semibold py-1 px-2 text-xs rounded-lg" style={{ border: "1px solid #009587" }}>
                        <MdAdd />
                      </button>
                    </>
                  ) : (
                    <button onClick={() =>{ handleAdd(index, product.newCost);handleAddToCart(product.title, product.newCost);}} className="bg-[#E6F5F3] text-[#009587] hover:text-[#0E7068] font-semibold py-1 px-2 text-xs rounded-lg" style={{ border: "1px solid #009587" }}>
                      ADD
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="m bg-white border-t border border-gray-100 shadow-md rounded-t-2xl py-2 px-4 -mt-4 sticky bottom-0 left-0 right-0 z-50 flex justify-between ">
          <div>
            <p className='text-md text-gray-700 '>Total Amount : {totalamount.toFixed(2)}</p>
          </div>
          <button className="text-white mt-4 bg-[#009587] hover:bg-[#0E7068] font-semibold text-sm md:text-md py-2 px-4 mb-2 rounded" onClick={onClose}>Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default PopupModalWallPaint;
