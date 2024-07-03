import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './../features/cartSlice';
import { useNavigate } from 'react-router-dom';
const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const handleUpdateCartItem = (title, newCost) => {
    dispatch(addToCart({ title, newCost: String(newCost) }));
  };
  
  const handleRemoveCartItem = (title, newCost) => {
    dispatch(removeFromCart({ title, newCost: String(newCost) }));
  };
  const navigate = useNavigate();
  const handlecheckout = () => {
  
    navigate('/painting-wall-services/checkout');
  };

  return (
    <div className='bg-slate-50 rounded-xl shadow-2xl max-h-screen overflow-auto my-28 mx-28'>
        <div className="container mx-auto p-6 md:p-12 ">
      <h1 className="text-2xl font-semibold mt-">Cart</h1>
      <div>
        {cartItems.length > 0 ? (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between text-xs md:text-base items-center border-b py-4 gap-4 md:gap-28 ">
                  <span>{item.title}</span>
                  
                  <div className='flex gap-2 mx-4 md:mx-48 bg-white rounded-lg shadow-md'>
                    <button className='mx-2 p-1'  onClick={() => handleUpdateCartItem(item.title, item.actualcost)}>+</button>
                    
                    <button className='mx-2 p-1' onClick={() => handleRemoveCartItem(item.title, item.actualcost)}>-</button>
                  </div>
                  <span>৳{item.newCost}</span>
                </li>

              ))}

            <li className='py-4 mt-2  flex justify-between gap-4'>
              <span className='text-xl'>Total Amount</span>
              <span className="flex items-center">
                <span className="mr-1">৳</span>
                {totalAmount}
                </span>
              </li>
            </ul>
            <div className={"py-4 px-20 mb-2  w-full"}>
              <button onClick={handlecheckout}   className="text-white mt-4 w-full bg-[#009587] hover:bg-[#0E7068]   font-semibold text-sm md:text-md  py-3 px-4 rounded-lg" style={{ border: "1px solid #009587" }} > Proceed To Checkout</button>
              
            </div>
            
           
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
    </div>
    
  );
};

export default CartPage;
