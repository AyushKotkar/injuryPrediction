import React, { useState } from 'react';

const Injury = () => {
  const [formData, setFormData] = useState({
    sessions: '',
    totalKm: '',
    kmZ34: '',
    kmZ5T1T2: '',
    kmSprinting: '',
    strengthTraining: '',
    hoursAlternative: '',
    perceivedExertion: '',
    perceivedTrainingSuccess: '',
    perceivedRecovery: '',
    athleteID: '',
    injury: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePredictInjury = (e) => {
    e.preventDefault();
    // Add logic to process the form data and predict injury here
    console.log('Form Data:', formData);
    // You can send a request to a server or perform calculations here
  };

  return (
    <div>
      <h2>Injury Page</h2>
      <form onSubmit={handlePredictInjury}>
        <div>
          <label>Number of Sessions:</label>
          <input
            type="text"
            name="sessions"
            value={formData.sessions}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Total Kilometers:</label>
          <input
            type="text"
            name="totalKm"
            value={formData.totalKm}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Total Sprints:</label>
          <input
            type="text"
            name="totalKm"
            value={formData.totalKm}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Strength Training:</label>
          <input
            type="text"
            name="totalKm"
            value={formData.totalKm}
            onChange={handleInputChange}
          />
        </div>
        {/* Add similar input fields for other parameters */}
        <div>
          <button type="submit">Predict Injury</button>
        </div>
      </form>
    </div>
  );
};

export default Injury;
