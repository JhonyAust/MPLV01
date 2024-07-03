import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import MyFooter from "./components/common/MyFooter";
import Navbar from "./components/common/Navbar";
import Subbar from "./components/common/Subbar";
import PrivateRoute from "./components/private-route/PrivateRoute";
import {
  HomeTwo,
  HomeThree,
  HomeLoan,
  About,
  AboutTwo,
  Services,
  ServicesTwo,
  Property,
  PropertyTwo,
  PropertyThree,
  PropertyFour,
  Search,
  PropertySix,
  Blog,
  BlogTwo,
  BlogThree,
  BlogFour,
  Contact,
  Portifolio,
  PortifolioTwo,
  Team,
  Faqs,
  PageNotFound,
  Home,
  SignIn,
  SignUp,
  Profile,
  CreateListing,
  Listing,
  UpdateListing,
  DreamHome,
  GroupShare
} from "./pages";
import { closeDropdown } from "./features/uiSlice";
import Dropdown from "./components/common/DropDown";
import NewsLetter from "./components/common/NewsLetter";
import Loader from "./components/common/Loader";
import Navigation from "./components/Navigation/Naviagation";
import HomeServices from "./pages/HomeServices";
import MyNavbar from "./components/common/MyNavbar";
import PaintingServices from "./pages/PaintingService";
import PaintWall from "./pages/PaintWall";
import PageComponent from "./pages/PageComponent";
import CartPage from "./pages/CartPage";
import CheckoutPaintWall from "./pages/CheckoutPaintWall";
import OrderConfirmation from "./pages/OrderConfirmation";
function App() {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State variable to track mobile view
  const dispatch = useDispatch();
  const route = useLocation();
   // Function to handle window resize event
   const handleResize = () => {
    setIsMobile(window.innerWidth <= 700); // Adjust the threshold as needed
  };

  useEffect(() => {
    // Initial check for mobile view on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Loader when page is loading
  window.addEventListener("load", () => {
    setShowLoader(false);
  });

  return (
    <div >
      {showLoader && <Loader />}
      {route.pathname !== '/build-home' && route.pathname !== '/group-share' && <Navbar />}
      {(route.pathname === '/build-home' || route.pathname === '/group-share') && <MyNavbar />}

      {isMobile && location.pathname === '/' && <Subbar/>}
      <Dropdown />
      <div
        className="min-h-screen pb-40"
        onClick={handleCloseDropdown}
        onMouseOver={() => dispatch(closeDropdown())}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-2" element={<HomeTwo />} />
          <Route path="/home-3" element={<HomeThree />} />
          <Route path="/home-loan" element={<HomeLoan />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about-2" element={<AboutTwo />} />
          <Route path="/about-2" element={<AboutTwo />} />
          <Route path="/build-home" element={<DreamHome />} />
          <Route path="/group-share" element={<GroupShare />} />
          <Route path="/services" element={<Services />} />
          <Route path="/painting-services" element={<PaintingServices/>} />
        
          <Route path="/painting-wall-services" element={<PaintWall/>} />
          <Route path="/services-2" element={<ServicesTwo />} />
          <Route path="/property" element={<Property />} />
          <Route path="/property-2" element={<PropertyTwo />} />
          <Route path="/property-3" element={<PropertyThree />} />
          <Route path="/property-4" element={<PropertyFour />} />
          <Route path="/search" element={<Search />} />
          <Route path="/property-6" element={<PropertySix />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-2" element={<BlogTwo />} />
          <Route path="/blog-3" element={<BlogThree />} />
          <Route path="/blog-4" element={<BlogFour />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/portifolio-2" element={<PortifolioTwo />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/home" element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/page' element={<PageComponent />} />
          <Route path='/home-services' element={<HomeServices />} />
          <Route path='/listing/:listingId' element={<Listing />} />
          <Route element={<PrivateRoute/>}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/create-listing' element={<CreateListing />} />
            <Route path="/painting-wall-services/cart" element={<CartPage/>} />
            <Route path="/painting-wall-services/checkout" element={<CheckoutPaintWall/>} />
            <Route path="/painting-wall-services/checkout/order-confirmation" element={<OrderConfirmation/>} />
            <Route 
              path='/update-listing/:listingId'
              element={<UpdateListing />}
            /> 
        </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      {/* {route.pathname !== '/build-home' &&(
      <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark relative z-10">
        <NewsLetter />
        <div className={` ${isMobile ? 'mb-20' : ''}`}>
          <Footer />
        </div>
      </div>
      )} */}
      {route.pathname &&(
      <div className={`mt-20 ${isMobile ? 'mb-20' : ''}`}>
        <MyFooter/>
      </div>
      )}
      {isMobile && <Navigation />} {/* Render the Navigation component only on mobile */}
      <BackToTopButton showButton={showButton} />
    </div>
  );
}

export default App;
