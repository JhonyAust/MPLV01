

const Hero = () => {
  return (
    <div className="   ">
       
        <div className="flex items-center justify-center" style={{
                height: "75vh",
                background: "#FFFFFF",
            }}>
                <div className="text-black text-center">
               
                <h2 className="text-xl mb-6" style={{ letterSpacing: '1px', wordSpacing: '1px' }}>
                Join Ventures
                    </h2>
                    <h1 className="text-4xl font-extrabold" style={{  letterSpacing: '1px', wordSpacing: '1px' }}>
                     Property Development Together
                    </h1>
                   
                    <div className="max-w-xl mt-5 text-black font-semibold">
                        <p className="whitespace-pre-wrap" style={{ letterSpacing: '1px', wordSpacing: '2px' }}>
                        Join forces with our group share property development services. Together, we pool resources and expertise for lucrative ventures. 
                        Our tailored approach ensures seamless collaboration, unlocking the potential for profitable investments.
                        </p>
                    </div>
                </div>
            </div>

           
            <div className=" relative flex items-center justify-center  h-screen bg-[#FFFFFF]" style={{
                background: "url('/images/gs.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
            }}>
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-tranparent"></div>  
            </div>
            
     
    </div>
  );
};

export default Hero;
