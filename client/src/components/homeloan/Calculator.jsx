import React, { useState,useEffect } from 'react';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(1);
  const [loanAmountElg, setLoanAmountElg] = useState(1);
  const [interestRate, setInterestRate] = useState(1);
  const [loanTenure, setLoanTenure] = useState(1);
  const [interestRateElg, setInterestRateElg] = useState(1);
  const [loanTenureElg, setLoanTenureElg] = useState(1);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [otherEmi, setOtherEmi] = useState(0);
  const [calcType, setCalcType] = useState('emi');

  const handleInputChange = (value, type) => {
    switch (type) {
      case 'loanAmount':
        setLoanAmount(value);
        break;
      case 'loanAmountElg':
        setLoanAmountElg(value);
        break;
      case 'interestRate':
        setInterestRate(value);
        break;
      case 'loanTenure':
        setLoanTenure(value);
        break;
      case 'interestRateElg':
        setInterestRateElg(value);
        break;
      case 'loanTenureElg':
        setLoanTenureElg(value);
        break;
      case 'monthlyIncome':
        setMonthlyIncome(value);
        break;
      case 'otherEmi':
        setOtherEmi(value);
        break;
      default:
        break;
    }
  };
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [estimatedEMI, setEstimatedEMI] = useState(0);
  const [eligibleLoanAmount, setEligibleLoanAmount] = useState(0);

  useEffect(() => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfPayments = loanTenure * 12;
    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    const calculatedTotalInterest = emi * numberOfPayments - loanAmount;
    const totalamountcal = parseInt(loanAmount) + parseInt(calculatedTotalInterest);


    setPrincipalAmount(loanAmount);
    setMonthlyEMI(Math.round(emi));
    setTotalInterest(Math.round(calculatedTotalInterest));
    setTotalAmount(Math.round(totalamountcal));
    const numberOfPaymentsElg = loanTenureElg * 12;
    const monthlyInterestRateElg = interestRateElg / 12 / 100;
    const emiElg = (loanAmountElg * monthlyInterestRateElg * Math.pow(1 + monthlyInterestRateElg, numberOfPaymentsElg)) / (Math.pow(1 + monthlyInterestRateElg, numberOfPaymentsElg) - 1);
    const presentValueFactor = 1 / Math.pow(1 + monthlyInterestRateElg, loanTenureElg * 12);
    const eligibleLoanAmountCalc = (monthlyIncome - otherEmi) * ((1 - presentValueFactor) / monthlyInterestRateElg);


    setEstimatedEMI(Math.round(emiElg));
    setEligibleLoanAmount(Math.round(eligibleLoanAmountCalc));
  }, [loanAmount, interestRate, loanTenure,loanAmountElg, interestRateElg, loanTenureElg,monthlyIncome,otherEmi]);

  const handleRangeChange = (event, type) => {
    handleInputChange(event.target.value, type);
  };

  return (
    <div className="bg-[#F0F0F0]  py-8">
    <div className="max-w-xl mx-auto bg-white p-8 ">
      <div className="bg-gray-200 rounded-md p-2">
        <div className="flex justify-between">
          <button
            className={`px-16 py-2 rounded-md focus:outline-none ${calcType === 'emi' ? 'bg-[#666BB1] text-white transition-all duration-300' : 'text-gray-500'}`}
            onClick={() => setCalcType('emi')}
          >
            EMI Calculator
          </button>
          <button
            className={` px-14 py-2 rounded-md focus:outline-none ${calcType === 'eligibility' ? 'bg-[#666BB1] text-white transition-all duration-300' : 'text-gray-500'}`}
            onClick={() => setCalcType('eligibility')}
          >
            Eligibility Calculator
          </button>
        </div>
      </div>
        {calcType === 'emi' && (
          <div>
            <h2 className="text-lg font-semibold mb-4 mt-8">EMI Calculator</h2>
            <div className="mb-4">
              <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label>
              <input type="number" id="loanAmount" className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none" value={loanAmount} onChange={(e) => handleInputChange(e.target.value, 'loanAmount')} />
              <input type="range" className="mt-4 w-full accent-[#666BB1]" min="1" max="10000000" value={loanAmount} onChange={(e) => handleRangeChange(e, 'loanAmount')} />
            </div>

            <div className="mb-4">
              <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (P.A.)</label>
              <input type="number" id="interestRate" className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none" value={interestRate} onChange={(e) => handleInputChange(e.target.value, 'interestRate')} />
              <input type="range" className="mt-4 w-full accent-[#666BB1]" min="1" max="20" step="0.1" value={interestRate} onChange={(e) => handleRangeChange(e, 'interestRate')} />
            </div>

            <div className="mb-4">
              <label htmlFor="loanTenure" className="block text-sm font-medium text-gray-700 mb-1">Loan Tenure</label>
              <input type="number" id="loanTenure" className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none" value={loanTenure} onChange={(e) => handleInputChange(e.target.value, 'loanTenure')} />
              <input type="range" className="mt-4 w-full accent-[#666BB1]" min="1" max="50" value={loanTenure} onChange={(e) => handleRangeChange(e, 'loanTenure')} />
            </div>
            <div className="relative bg-[#ECEDF5] rounded-md p-20">
            <div className="absolute top-4 left-4">
              <div className="flex flex-col items-start">
                <span className="text-[#464B94]">Monthly Emi</span>
                <div className="flex items-center mt-1">
                  <span className="font-bold text-lg  mr-1 text-[#464B94]">$</span>
                  <span className="font-bold text-lg text-[#464B94]">{Number(monthlyEMI).toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <div className="flex flex-col items-start">
                <span className="text-[#464B94]">Principle Amount</span>
                <div className="flex items-center mt-1">
                  <span className="font-bold text-lg  mr-1 text-[#464B94]">$</span>
                  <span className="font-bold text-lg  text-[#464B94]">{Number(principalAmount).toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <div className="flex flex-col items-start">
                <span className="text-[#464B94]">Total Interest</span>
                <div className="flex items-center mt-1">
                  <span className="font-bold text-lg  mr-1 text-[#464B94]">$</span>
                  <span className="font-bold text-lg  text-[#464B94]">{Number(totalInterest).toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-11">
              <div className="flex flex-col items-start">
                <span className="text-[#464B94]">Total Amount</span>
                <div className="flex items-center mt-1">
                  <span className="font-bold text-lg  mr-1 text-[#464B94]">$</span>
                  <span className="font-bold text-lg  text-[#464B94]">{Number(totalAmount).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          </div>
        )}

        {calcType === 'eligibility' && (
          <div>
            <h2 className="text-lg font-semibold mb-4 mt-8">Eligibility Calculator</h2>
            <div className="mb-4">
              <label htmlFor="loanAmountElg" className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label>
              <input type="number" id="loanAmountElg" className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none" value={loanAmountElg} onChange={(e) => handleInputChange(e.target.value, 'loanAmountElg')} />
              <input type="range" className="mt-4 w-full accent-[#666BB1]" min="0" max="10000000" value={loanAmountElg} onChange={(e) => handleRangeChange(e, 'loanAmountElg')} />
            </div>
            <div className="mb-4">
              <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700 mb-1">Monthly Income</label>
              <input type="number" id="monthlyIncome" className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none" value={monthlyIncome} onChange={(e) => handleInputChange(e.target.value, 'monthlyIncome')} />
              <input type="range" className="mt-4 w-full accent-[#666BB1]" min="0" max="500000" value={monthlyIncome} onChange={(e) => handleRangeChange(e, 'monthlyIncome')} />
            </div>

            <div className="mb-4">
              <label htmlFor="otherEmi" className="block text-sm font-medium text-gray-700 mb-1">Other EMI</label>
              <input type="number" id="otherEmi" className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none" value={otherEmi} onChange={(e) => handleInputChange(e.target.value, 'otherEmi')} />
              <input type="range" className="mt-4 w-full accent-[#666BB1]" min="0" max="250000" value={otherEmi} onChange={(e) => handleRangeChange(e, 'otherEmi')} />
            </div>
            <div className="mb-4">
              <label htmlFor="interestRateElg" className="block text-sm font-medium text-gray-700 mb-1"> Rate of Interest (P.A.)</label>
              <input type="number" id="interestRateElg" className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none" value={interestRateElg} onChange={(e) => handleInputChange(e.target.value, 'interestRateElg')} />
              <input type="range" className="mt-4 w-full accent-[#666BB1]" min="1" max="20" step="0.1" value={interestRateElg} onChange={(e) => handleRangeChange(e, 'interestRateElg')} />
            </div>

            <div className="mb-4">
              <label htmlFor="loanTenureElg" className="block text-sm font-medium text-gray-700 mb-1">Loan Tenure</label>
              <input type="number" id="loanTenureElg" className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none" value={loanTenureElg} onChange={(e) => handleInputChange(e.target.value, 'loanTenureElg')} />
              <input type="range" className="mt-4 w-full accent-[#666BB1]" min="1" max="50" value={loanTenureElg} onChange={(e) => handleRangeChange(e, 'loanTenureElg')} />
            </div>
            <div className="relative bg-[#ECEDF5] rounded-md p-10">
            <div className="absolute top-4 left-4">
              <div className="flex flex-col items-start">
                <span className="text-[#464B94]">Estimated Emi</span>
                <div className="flex items-center mt-1">
                  <span className="font-bold text-lg  mr-1 text-[#464B94]">$</span>
                  <span className="font-bold text-lg text-[#464B94]">{Number(estimatedEMI).toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <div className="flex flex-col items-start">
                <span className="text-[#464B94]">Eligible Loan Amount</span>
                <div className="flex items-center mt-1">
                  <span className="font-bold text-lg  mr-1 text-[#464B94]">$</span>
                  <span className="font-bold text-lg  text-[#464B94]">{Number(eligibleLoanAmount).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Calculator;
