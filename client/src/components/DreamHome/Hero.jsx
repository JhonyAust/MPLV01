

const Hero = () => {
  return (
    <div className=" flex  items-center justify-center  "style={{
        background: "url('/images/roof.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "150vh",
      }}>
      <div className="text-white text-center ">
        <h1 className="text-4xl  font-bold  "style={{fontFamily: 'II Vorkurs Medium, sans-serif', letterSpacing: '2px', wordSpacing: '2px' }}>
        All under one roof
        </h1>
        <div className="max-w-xl mt-5 text-white ">
            <p className="whitespace-pre-wrap"style={{fontFamily: 'II Vorkurs Medium, sans-serif', letterSpacing: '1px', wordSpacing: '2px' }}>
                For most of us, building your own home is a once in a lifetime experience.
                It can be a daunting prospect, filled with uncertainty and risk. NoMedia
                offers a simpler way to realise your dream by combining all of the necessary
                skills and knowledge into one company.
                One company that does it all.
                So you can focus on enjoying the journey and planning for
                life in your new home.
            </p>
            </div>
      </div>
     
    </div>
  );
};

export default Hero;
