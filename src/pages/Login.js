import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import LoginForm from '../components/LoginForm';

const Login = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLoginSuccess = () => {
    navigate('/dashboard'); // Use navigate to redirect to dashboard
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Login;
