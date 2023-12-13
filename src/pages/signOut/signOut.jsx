// SignOutPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Видалення токену з LocalStorage
    localStorage.removeItem('authToken');

    // Перенаправлення на сторінку логіну після виходу
    navigate('/login');
  };

  return (
    <div>
      <h2>Sign Out</h2>
      <p>Are you sure you want to sign out?</p>
      <button onClick={handleSignOut}>Sign me out</button>
    </div>
  );
};

export default SignOut;
