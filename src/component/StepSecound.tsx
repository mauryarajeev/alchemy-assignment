import React, { useState } from 'react';
import './StepSecound.css';
import iconLogo from "../assets/Group.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons for visibility toggle

interface StepSecondProps {
  setPassword: (password: string) => void; // Function to set password in the parent component
  onLogin: () => void; // Function to call when logging in
}

const StepSecond: React.FC<StepSecondProps> = ({ setPassword, onLogin }) => {
  const [password, setLocalPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to track visibility of password

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPassword(password); // Set password in parent component
    onLogin(); // Call the login function
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="form-wrapper">
          {/* Left Section */}
          <div className="left-section">
            <div className="logo-container">
              <div className="logo">
                <img src={iconLogo} alt="Logo" className="logo-image" />
              </div>
            </div>
            <div className="step-info">
              <h3 className="step-number">STEP 2</h3>
              <h1 className="heading">Create an account to continue</h1>
              <p className="subtext">
                You’ll be able to log in to Dingoo with this email address and password.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <form onSubmit={handleSubmit} className="password-form">
              <div className="input-container">
                <p>Enter a password to create your account with</p>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'} // Toggle between text and password
                    placeholder="Choose a password"
                    value={password}
                    onChange={(e) => {
                      setLocalPassword(e.target.value); // Update local password
                    }}
                    className="password-input"
                  />
                  {/* Eye Icon for Toggle */}
                  <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </span>
                </div>
              </div>
              <div className="requirements-button-container">
                <span className="password-requirements">
                  Use a minimum of 6 characters (case sensitive) with at least one number or special character.
                </span>
                <button type="submit" className="submit-button">
                  Agree & Continue
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="password-requirements">
          Dingoo will use your data to personalise and improve your Dingoo experience and to send you information about Dingoo. You can change your communication preferences anytime. We may use your data as described in our Privacy Policy, including sharing it with The Test of Companies. By clicking "Agree & Continue", you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.
        </p>
      </div>
    </div>
  );
};

export default StepSecond;
