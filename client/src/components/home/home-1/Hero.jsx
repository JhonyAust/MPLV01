import { GiKeyCard } from "react-icons/gi";
import { MdOutlineBedroomChild } from "react-icons/md";

const Hero = () => {
  return (
    <div
      className="relative z-0 flex-wrap  gap-2 mt-24 flex-center-center"
      style={{
        background: "url('/images/hero-bg-pattern.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "",
      }}
    >
      <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/30 dark:bg-[#04a7ff]/50 w-72 h-72 -z-10 blur-[120px]"></div>
      <div className="flex-1 basis-[20rem] flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold capitalize md:text-3xl">
        Bangladesh's Largest NoMedia Zero Commission Property Site
        </h1>
        {/* <div className="pl-3 mt-5 border-l-4 border-primary">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nulla
            unde exercitationem! Recusandae error quaerat sapiente quibusdam
            culpa magni eius?
          </p>
        </div> */}
        <div className="flex bg-[#FEF0DA] p-4 justify-center rounded-sm mt-10">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center">
              <MdOutlineBedroomChild className="mr-2" size={20} /> {/* Use the React icon component */}
              <h2 className="">Home Interiors</h2>
            </div>
          </div>
          <div className="ml-2  mr-2  border-l-2 border-gray-400"> </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center ">
              <GiKeyCard   className="mr-2" size={20} /> {/* Use the React icon component */}
              <h2 className="">45 Days Handover</h2>
            </div>
          </div>
        </div>
        {/* <button className="mt-6 btn btn-primary">get started</button> */}
        {/* <div className="mt-6 text-center flex-align-center gap-x-6">
          <div>
            <h1 className="text-2xl font-bold">
              12k <span className="text-sm text-primary">+</span>
            </h1>
            <p>Requested Projects</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              15k <span className="text-sm text-primary">+</span>
            </h1>
            <p>Projects Completed</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              100 <span className="text-sm text-primary">+</span>
            </h1>
            <p>Served Clients</p>
          </div>
        </div> */}
      </div>
      {/* <div className="flex-1 basis-[20rem]">
        <img src="/images/hero-4.png" alt="" className="w-full" />
      </div> */}
    </div>
  );
};

export default Hero;
