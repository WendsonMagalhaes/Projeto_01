import React, { Component } from 'react'

export class NewDietForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.next_step();
      }
      render() {
        const { values, handleChange } = this.props;
        return (
            <div className = 'container'>
            <div className = 'container-info register'>
              <div className = 'wrap-info'>
                <form className = 'info-form' onSubmit = {'continue'}>
      
                  <span className = 'info-form-logo'>
                    <img src = {'/images/logo.png'} alt = "logo"/>
                  </span>

                  <div className = 'wrap-input'>
                    <input className = {values.patientName !== "" ? 'has-val input' : 'input'} 
                           type = "patientName" 
                           value = {values.patientName} 
                           onChange = {handleChange('patientName')} />
                    <span className = 'focus-input' data-placeholder = "Nome do Paciente"></span>
                  </div>
                    
                  <div className = 'wrap-input'>
                    <input className = {values.day !== "" ? 'has-val input' : 'input'} 
                           type = "day" 
                           value = {values.day} 
                           onChange = {handleChange('day')} />
                    <span className = 'focus-input' data-placeholder = "Dia"></span>
                  </div>

                  <div className = 'wrap-input'>
                    <input className = {values.time !== "" ? 'has-val input' : 'input'} 
                           type = "timeoftheday" 
                           value = {values.time} 
                           onChange = {handleChange('time')} />
                    <span className = 'focus-input' data-placeholder = "Horário"></span>
                  </div>

                  <div className = 'wrap-input'>
                    <input className = {values.name !== "" ? 'has-val input' : 'input'} 
                           type = "name" 
                           value = {values.name} 
                           onChange = {handleChange('name')} />
                    <span className = 'focus-input' data-placeholder = "Nome da dieta"></span>
                  </div>

                  <div className = 'wrap-input'>
                    <input className = {values.ingredients !== "" ? 'has-val input' : 'input'} 
                           type = "ingredients" 
                           value = {values.ingredients} 
                           onChange = {handleChange('ingredients')} />
                    <span className = 'focus-input' data-placeholder = "Ingredientes"></span>
                  </div>

                  <div className = 'wrap-input'>
                    <input className = {values.instructions !== "" ? 'has-val input' : 'input'} 
                           type = "instructions" 
                           value = {values.instructions} 
                           onChange = {handleChange('instructions')} />
                    <span className = 'focus-input' data-placeholder = "Modo de Preparo"></span>
                  </div>

                <div className = 'container-form-btn next'>
                    <button onClick = {this.continue} className ='form-btn next-btn'> Cadastrar Dieta </button>
                </div>
                </form>
            </div>
            </div>
            </div>
        )
  }
}

export default NewDietForm