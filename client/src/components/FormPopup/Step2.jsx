import React, { useState } from 'react';

const Step2 = ({ onNext, onPrev, onFormData }) => {
  const [formData, setFormData] = useState({
    dateTime: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (formData.dateTime.trim() === '') {
      alert('Please select a date and time.');
      return;
    }
    // Pass form data to parent component
    onFormData({ step2Data: formData });
    onNext(); // Proceed to next step
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dateTime" className='flex justify-start mb-4'>Select Your Time:</label>
        <input type="datetime-local" id="dateTime" name="dateTime" value={formData.dateTime} onChange={handleChange} />
      </div>
      {/* Add more form fields here */}
      <button type="button" onClick={onPrev}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2;
