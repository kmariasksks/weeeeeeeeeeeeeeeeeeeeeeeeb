// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const storedUserData = JSON.parse(localStorage.getItem('registrationData'));

    if (
      storedUserData &&
      storedUserData.email === loginData.email &&
      storedUserData.password === loginData.password
    ) {
      console.log('Login successful!');
      localStorage.setItem('loginData', JSON.stringify(loginData));
      console.log('Login data:', loginData);
      navigate('/HomePage');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </label>
        <br />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
