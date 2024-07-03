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
import Dashboard from "../components/service/Dashboard";

const Home = () => {
  return (
    <div>
      <div className="pt-6 px-[3%] md:px-[6%]">
        <Hero />
        <Filters />
        <div className=" w-full"> {/* Wrapper div */}
          <MainPropertyOwnerSection />
        </div>
      </div>
      <div className="pt-6">
        <CheckEligibility/></div>
      <div className="pt-6 px-[3%] md:px-[6%]">
        <Dashboard/>
        <Invest />
        <Speciality />
        <Services />
        <Featured />
        <Counter />
        <Projects />
        <Testimonial />
        <Brands />
        <Feeds />
      </div>
    </div>
  );
};

export default Home;
