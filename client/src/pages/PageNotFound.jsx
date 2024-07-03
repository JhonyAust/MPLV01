import React, { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import NotFoundImg from "../404.png";
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 2000); // 2000 milliseconds = 2 seconds

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="flex-col min-h-screen text-center flex-center-center">
      <img src={NotFoundImg} alt="" className="w-[400px] -mt-20" />
      <h1 className="text-6xl font-bold opacity-50">Page Not Found!!</h1>
      <button
        className="gap-2 mt-4 btn btn-primary flex-center-center"
        onClick={handleGoBack}
      >
        <BiArrowBack />
        <span>go back</span>
      </button>
    </div>
  );
};

export default PageNotFound;
