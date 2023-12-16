import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState(''); // Add the email state variable
  const [password, setPassword] = useState(''); // Add the password state variable
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the "Sign Up" page
  };

  const handleLoginClick = () => {
    navigate('/injury'); // Navigate to the "Sign Up" page
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling login or signup here
    console.log(`Email: ${email}, Password: ${password}`);
    // You can send a request to your server or perform client-side validation here
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <p>
        <button onClick={handleLoginClick}>Login</button>
      </p>
      <p>
        Don't have an account? <button onClick={handleSignUpClick}>Sign Up</button>
      </p>
      
    </div>
  );
};

export default Login;
