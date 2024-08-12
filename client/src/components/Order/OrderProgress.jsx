import React from 'react';

const steps = [
    'Order Received',
    'In-Person Consultation',
    'Confirmed',
    'Completed',
    'Cancelled',
];

const getStatusIndex = (status) => {
    return steps.indexOf(status);
};

const OrderProgress = ({ status }) => {
    const statusIndex = getStatusIndex(status);

    return (
        <div className="flex items-center justify-between w-max py-6">
            {steps.map((step, index) => {
                // Check if we should render the step
                if (step === 'Cancelled' && status !== 'Cancelled') {
                    // Skip rendering Cancelled step if the status is not 'Cancelled'
                    return null;
                }

                return (
                    <div key={index} className="flex flex-col">
                        <div className="relative flex items-center">
                            {/* Circle */}
                            <div
                                className={`w-5 h-5 flex items-center justify-center rounded-full ${
                                    index <= statusIndex ? 'bg-red-500' : 'bg-red-200'
                                }`}
                            >
                                <div
                                    className={`w-2 h-2 rounded-full ${
                                        index <= statusIndex ? 'bg-white' : 'bg-white'
                                    }`}
                                ></div>
                            </div>

                            {/* Line */}
                            {index < steps.length - 2 && (
                                <div
                                    className={`w-20 md:w-32 h-[3px] ${
                                        index < statusIndex ? 'bg-red-500' : 'bg-red-200'
                                    }`}
                                />
                            )}
                            {index < steps.length - 1 && step === 'Completed' && status === 'Cancelled' && (
                                <div
                                    className={`w-20 md:w-32 h-[3px] ${
                                        index < statusIndex ? 'bg-red-500' : 'bg-red-200'
                                    }`}
                                />
                            )}
                        </div>
                        {/* Step label */}
                        <div className="mt-4 text-[8px] font-poppins">
                            {step}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default OrderProgress;
