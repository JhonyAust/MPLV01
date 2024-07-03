import {
  Brands,
  Counter,
  Featured,
  Projects,
  Services,
  Testimonial,
} from "../components/common/page-componets";
import {
  CheckEligibility,
  Feeds,
  Filters,
  Hero,
  Invest,
  Speciality,
} from "../components/home/home-1";
import MainPropertyOwnerSection from "../components/home/home-1/MainPropertyOwnerSection";
import Bank from "../components/homeloan/Bank";
import Calculator from "../components/homeloan/Calculator";
import HeroLoan from "../components/homeloan/HeroLoan";
import Dashboard from "../components/service/Dashboard";
import FaqsLoan from "./FaqsLoan";

const HomeLoan = () => {
  return (
    <div>
        <HeroLoan />
      {/* <div className="pt-6">
        <CheckEligibility/></div> */}
        <Bank/>
        <Calculator/>
      <div className="pt-6 px-[3%] md:px-[6%]">
        
        <FaqsLoan/>
        <Dashboard/>
        
      </div>
    </div>
  );
};

export default HomeLoan;
