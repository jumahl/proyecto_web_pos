import React from 'react';
import RegisterForm from '../components/RegisterForm';
import '../styles/Register.css';
import logo from '../assets/logoC.jpg';
import background from '../assets/fondo.jpg';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-image">
        <img src={background} alt="Background" className="background-image" />
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1>CodMain</h1>
        </div>
      </div>
      <div className="register-form">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
