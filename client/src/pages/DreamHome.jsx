import Approval from "../components/DreamHome/Approval";
import Contact from "../components/DreamHome/Contact";
import Design from "../components/DreamHome/Design";
import Hero from "../components/DreamHome/Hero";


const DreamHome = () => {
    return (
      <div>
        <Hero/>
        {/* <Approval/> */}
        <Design/>
        <Contact/>
      </div>
    );
  };
  
export default DreamHome;