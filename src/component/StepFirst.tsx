import React, { useState } from 'react';
import './StepFirst.css'; // CSS for styling the form
import iconLogo from "../assets/Group.png";

interface EmailFormProps {
  setStep: (step: number) => void; // Function to change the step (passed from App)
  setEmail: (email: string) => void; // Function to set email in the parent component
}

const EmailForm: React.FC<EmailFormProps> = ({ setStep, setEmail }) => {
  const [email, setLocalEmail] = useState('');
  const [error, setError] = useState(''); // For displaying validation errors

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError(''); // Clear error if email is valid
    console.log('Submitted Email:', email);

    setEmail(email); // Set email in parent component
    setStep(2); // Move to Step 2 (StepSecond component)
  };

  return (
    <div className="container">
      <div className="form-box">
        {/* Left Section */}
        <div className="left-section">
          <div className="logo-container">
            <div className="logo">
              <img src={iconLogo} alt="Logo" className="logo-image" />
            </div>
            
          </div>
          <div className="step-info">
            <h3 className="step-number">STEP 1</h3>
            <h1 className="heading">Enter your email address to continue</h1>
            <p className="subtext">
              Log in to your account. If you don't have one, you'll be prompted to create one.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <form onSubmit={handleSubmit} className="email-form">
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setLocalEmail(e.target.value); // Update local email
                }}
                className={`email-input ${error ? 'error-input' : ''}`}  // Add class if there's an error
              />
            </div>
            {/* Display validation error if exists */}
            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="submit-buttons">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
