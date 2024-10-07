import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Step from './StepFirst'; // Import your Step component
import Footer from './Footer'; // Import your Footer component
import './Layout.css'; // CSS file for styling the layout
import EmailForm from './StepFirst';  // Import the EmailForm component
import StepSecond from './StepSecound'; // Import the StepSecond component


const Layout: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState(''); // State to store email
  const [password, setPassword] = useState(''); // State to store password
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    try {
      const loginResponse = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: "testadmin", password: "testadmin" }),
      });

      if (!loginResponse.ok) {
        throw new Error('Login failed');
      }

      const tokenData = await loginResponse.json();
      const token = tokenData.token; // Adjust according to your API response

      // Make a request to fetch customer list
      const customerListResponse = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api/customer-list/', {
        headers: {
          'Authorization': `Token ${token}`,
        },
      });

      if (!customerListResponse.ok) {
        throw new Error('Failed to fetch customer list');
      }

      // Successfully logged in and fetched customer list
      console.log('Successfully logged in and fetched customer list');

      // Navigate to the dashboard
      navigate('/dashboard'); // Replace '/dashboard' with the actual path to your dashboard

    } catch (error) {
      console.error(error);
      // Handle error accordingly, e.g., set an error message state
    }
  };

  return (
    <div className="layout-container">
      {/* Main content */}
      <main className="main-content">
        {step === 1 && <EmailForm setStep={setStep} setEmail={setEmail} />} {/* Show EmailForm (Step 1) */}
        {step === 2 && <StepSecond setPassword={setPassword} onLogin={handleLogin} />} {/* Show StepSecond when the form is successfully submitted */}
      </main>

      {/* Footer */}
      <footer className="footer">
        <Footer /> {/* Footer component goes here */}
      </footer>
    </div>
  );
};

export default Layout;
