import React, { useEffect } from 'react';
import LoginForm from '../../components/login_admin/LoginForm';
import logo from '../../assets/login_admin/logo_codmain.png';
import '../../styles/login_admin/loginStyles.css';

//Nombre de la pestaña
const LoginPage = () => {
  useEffect(() => {
    document.title = 'LoginAdmin';
  }, []);


  //contenido de la pagina
  return (
    <div className="login-background">
      <div className="login-container">
        <img src={logo} alt="CodMain Logo" className="login-logo" />
        <h2>CodMain</h2>
        <h3>Inicio de Sesion</h3>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
