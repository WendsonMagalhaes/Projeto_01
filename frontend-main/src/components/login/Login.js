import React, { Component,useState, useContext } from 'react';
import {NavLink, useHistory} from 'react-router-dom'
import '../styles/login.css'
import Userfront from "@userfront/core";




export class Login extends Component  {
 
  state = {
    email: '',
    password: '',
  }
 

  handleChange = input => e => {
  this.setState ({[input]: e.target.value}); 
  }
  
  handleSubmit(event)  {
    event.preventDefault();
    Userfront.login({
      method: "password",
      email: this.state.email,
      password: this.state.password, 
     
    });
  }

    render () {
      const { email,
              password} = this.state;
      const values = {email, password} ;

      return (
      <div className ='container'>
        <div className = 'container-info'>
          <div className ='wrap-info'>
            <form className ='info-form' onSubmit={'handleSubmit'} >
  
              <span className ='info-form-logo'>
                <img src = {'/images/logo.png'} alt = "logo"/>
              </span>
  
              <div className ='wrap-input'>
                <input className = {values.email !== "" ? 'has-val input' : 'input'} 
                       type = "text" 
                       value = {values.email} 
                       onChange = {this.handleChange('email')} />
                <span className ='focus-input' data-placeholder = "E-mail"></span>
              </div>
  
              <div className = 'wrap-input'>
                <input className = {values.password !== "" ? 'has-val input' : 'input'} 
                       type = "password" 
                       value = {values.password} 
                       onChange = {this.handleChange('password')} />
                <span className = 'focus-input' data-placeholder = "Senha"></span>
              </div>
  
              <div className = 'container-form-btn signup'>
                <NavLink to = "/signup">
                  <button className = 'form-btn signup-btn'> Cadastro </button>
                </NavLink>
              </div>
  
              <div className = 'container-form-btn login'>
                <NavLink to = "/nutrihome"><button className = 'form-btn login-btn'> Login </button></NavLink>
              </div>
  
            </form>
          </div>
  
        </div>
  
      </div>
      )
    }
}

export default Login