import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SignupForm from '../components/SignupForm';

const Signup = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSignupSuccess = () => {
    navigate('/login'); // Use navigate to redirect to login
  };

  return (
    <div>
      <h2>Signup</h2>
      <SignupForm onSignupSuccess={handleSignupSuccess} />
    </div>
  );
};

export default Signup;
