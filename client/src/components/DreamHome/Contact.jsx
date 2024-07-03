import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons

const Contact = () => {
  const questions = [
    "What's your name?",
    "What's your email?",
    "What's your mobile?",
    "What's your address?",
    "Do you have a site for your new home?",
    "Tell us details about your site and query",
    "And finally,is there anything else you'd like to ask? "
    
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [showInput, setShowInput] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inputValues, setInputValues] = useState({
    hasSite: '',
    siteDetails: ''
  });

  const handleNext = () => {
    if (currentQuestion === 4 && inputValues.hasSite === 'No') {
        setCurrentQuestion(currentQuestion + 2); // Skip question 6 and go to the next question
      } else if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
  };

  const handlePrevious = () => {
    if (currentQuestion === 6 && inputValues.hasSite === 'No') {
        setCurrentQuestion(currentQuestion - 2); // Skip question 6 and go to the previous question
      } else if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
      }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'hasSite') {
      setInputValues({ ...inputValues, hasSite: value });
    } else {
      setInputValues({ ...inputValues, siteDetails: value });
    }
  };

  const handleTellUsMore = () => {
    setShowInput(true);
    setSubmitted(false); // Reset submitted state
    setCurrentQuestion(0);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowInput(false);
  };

  return (
    <div className="flex items-center justify-center" style={{
      background: "url('/images/design5.webp')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "180vh",
    }}>
      <div className="flex flex-col items-center">
        <div className="bg-[#FEF200] p-36 flex items-center justify-center">
          <div className="flex flex-col items-center justify-between space-y-8">
            <h1 className="text-4xl font-bold text-black text-center">
              NOMEDIA
            </h1>
            {submitted ? (
              <>
                <p className="text-2xl text-gray-600 text-center">
                  Thanks for submitting!
                </p>
                <button
                  onClick={handleTellUsMore}
                  className="bg-white text-lg rounded-md text-gray-600 hover:text-black px-4 py-2"
                >
                  Tell us more
                </button>
              </>
            ) : (
              <>
                {!showInput ? (
                  <>
                    <p className="text-2xl text-gray-600 text-center">
                      Are you thinking about building a new home?
                    </p>
                    <button
                      onClick={handleTellUsMore}
                      className="bg-white text-lg rounded-md text-gray-600 hover:text-black px-4 py-2"
                    >
                      Tell us more
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-2xl text-black text-center">
                      {questions[currentQuestion]}
                    </p>
                    <div style={{ position: 'relative' }}>
                      {currentQuestion === 4 ? (
                        <select
                          id="hasSite"
                          name="hasSite"
                          value={inputValues.hasSite}
                          onChange={handleInputChange}
                          className="border-2 border-black p-2 text-lg focus:outline-none bg-transparent"
                        >
                          <option value="">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      ) : (
                        <input
                          type="text"
                          onChange={handleInputChange}
                          className="p-2 rounded-md  text-xl focus:outline-none placeholder-[#B4AB02] ::placeholder"
                          style={{ background: 'none', border: 'none' }}
                          placeholder="Enter your answer here..."
                        />
                      )}
                      {currentQuestion !== 4 && (
                        <div style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: '2px',
                            backgroundColor: 'black'
                        }} />
                        )}
                    </div>
                    <div className="flex space-x-4">
                      {currentQuestion > 0 && (
                        <button
                          onClick={handlePrevious}
                          className=" text-lg rounded-md text-gray-600 hover:text-black px-4 py-2"
                        >
                          <FaArrowLeft /> {/* Arrow left icon */}
                        </button>
                      )}
                      {currentQuestion < questions.length - 1 && (
                        <button
                          onClick={handleNext}
                          className=" text-lg rounded-md text-gray-600 hover:text-black px-4 py-2"
                        >
                          <FaArrowRight /> {/* Arrow right icon */}
                        </button>
                      )}
                      {currentQuestion === questions.length - 1 && (
                        <button
                          onClick={handleSubmit}
                          className="bg-white text-lg rounded-md text-gray-600 hover:text-black px-4 py-2"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        <div className="text-white text-center mt-20 space-y-5">
          <p className="text-lg font-bold" style={{ letterSpacing: '2px', wordSpacing: '2px' }}>
            We love talking to people about creating their dream home.
          </p>
          <p className="text-lg font-bold" style={{ letterSpacing: '2px', wordSpacing: '2px' }}>
            So if you are starting your journey, or just have a quick question,
            <br/> we'd encourage you to give us a call on:
          </p>
          <h2 className="text-3xl font-bold" style={{ letterSpacing: '2px', wordSpacing: '2px' }}>
            018400000001
          </h2>
          <p className="text-lg font-bold" style={{ letterSpacing: '2px', wordSpacing: '2px' }}>
            Drop us an email at:
          </p>
          <h2 className="text-3xl font-bold" style={{ letterSpacing: '2px', wordSpacing: '2px' }}>
            info@nomedia.com
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
