import FaqsList from "../components/faqs/FaqsList";


const FaqsLoan = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <div className=" mb-9">
        <h1 className="text-xl border-b-2 pb-3 font-bold">
        Top questions asked
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2">
        
        <div className="md:col-span-2">
          <FaqsList />
        </div>
      
      </div>
    </div>
  );
};

export default FaqsLoan;
