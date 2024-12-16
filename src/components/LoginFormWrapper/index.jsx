import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../LoginForm';

const LoginFormWrapper = () => {
  const navigate = useNavigate();
  return <LoginForm navigate={navigate} />;
};

export default LoginFormWrapper;
