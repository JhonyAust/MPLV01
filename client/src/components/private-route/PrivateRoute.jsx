import { useSelector } from 'react-redux';
import { useState,useLocation  } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SignInPopUp from '../auth/SignInPopUp';
export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(!currentUser); // Show sign-in popup if user is not logged in
  const navigate = useNavigate();


  const handleCloseSignInPopup = () => {
    setIsOpen(false);
    if (!currentUser  ) {
      const currentPath = window.location.pathname;
      const newPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
      navigate(newPath); 
    }
};

  return (
    <div>
      {/* Render sign-in popup if isOpen is true and user is not logged in */}
      { !currentUser ? (
      <SignInPopUp isOpen={isOpen} onClose={handleCloseSignInPopup} />
      ) : (
        <Outlet />
      )}
    </div>
  );
}