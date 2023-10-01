// import { useState } from 'react';
import {FormEvent } from "react";
import "./login.component.scss";

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
  
    // const handleEmailChange = (e: FormEvent) => {
    //   setEmail(e.target.value);
    // };
  
    // const handlePasswordChange = (e: FormEvent) => {
    //   setPassword(e.target.value);
    // };
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
    //   console.log('Email:', email);
    //   console.log('Password:', password);
    };
  
    return (
      <div className="connexion">
      <div className="login">
        <div className="login_titlle">
          <h1>Connexion</h1>
        </div>
        <div className="ensemble">
        <form onSubmit={handleSubmit}>
          <div className="login_input">
            <input type="email" id="email" placeholder="Adresse email" />
          </div>
          <div className="login_input">
            <input type="password" id="password" placeholder="Mot de passe" />
          </div>
          <div className="register-link">
            <p>
                Pas encore de compte?<a href="inscription">S'inscrire</a>
            </p>
          </div>
          <button className="btn" type="submit">Se connecter</button>
        </form>
        </div>
      </div>
      </div>
    );
  };
  
  export default Login;
  