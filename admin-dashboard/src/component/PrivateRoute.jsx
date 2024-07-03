import { useSelector } from 'react-redux';
import { useState,useLocation  } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { SignIn } from '@/pages/auth';
export default function PrivateRoute() {
  const { currentAdmin} = useSelector((state) => state.admin);
  
  const navigate = useNavigate();



  return (
    <div>
      {/* Render sign-in popup if isOpen is true and user is not logged in */}
      { !currentAdmin ? (
      <SignIn/>
      ) : (
        <Outlet />
      )}
    </div>
  );
}