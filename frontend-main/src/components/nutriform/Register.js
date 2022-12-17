/* eslint-disable default-case */
import React, { Component } from 'react';
import Details from './Details';
import Additional from './Additional';
import Confirm from './Confirm';
import Success from './Success';


export class Register extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        code: '',
        education: '',
        clinic_address: '',
        additional_info: '',
    }

    // Next Step
    next_step = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Previous step
    prev_step = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle change

    handleChange = input => e => {
        this.setState ({[input]: e.target.value}); 
    }

  render() {
    const { step } = this.state;
    const { name, email,
            password, password_confirmation,
            code, education, 
            clinic_address, additional_info} = this.state;
    const values = { name, email,
        password, password_confirmation,
        code, education, 
        clinic_address, additional_info}
        
    switch (step) {
        case 1:
            return (
                <Details 
                    next_step = {this.next_step}
                    handleChange = {this.handleChange}
                    values = {values}
                />
            )
        case 2:
            return (
                <Additional 
                    next_step = {this.next_step}
                    prev_step = {this.prev_step}
                    handleChange = {this.handleChange}
                    values = {values}
                />
            )

        case 3:
            return (
                <Confirm 
                    next_step = {this.next_step}
                    prev_step = {this.prev_step}
                    values = {values}
                />
            )
        
        case 4:
            return (
                <Success />
            )
        
    }
  }
}

export default Register