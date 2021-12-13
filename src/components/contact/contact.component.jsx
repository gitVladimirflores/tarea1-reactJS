import React from 'react';

import FormInput from '../form-input/form-input.component';
import FormTextarea from '../form-textarea/form-textarea.component';
import CustomButton from '../custom-button/custom-button.component';

import './contact.styles.css';

class Contact extends React.Component{
    constructor(){
        super();

        this.state = {
            nombre:'',
            email:'',
            telefono:'',
            ciudad:'',
            mensaje:'Message'
        }

    }

    handleSubmit = event => {
        //evento que sirve para que cuando se haga el envio del formulario no se refresque el navegador
        event.preventDefault();

        this.setState({ nombre:'', email:'', telefono:'', ciudad:'', mensaje:'Message' }); //Se limpia el formulario

    };

    handleChange = event =>{
        const { value,name } = event.target; //Se apunta al name y al value de cada input

        this.setState({ [name]:value }); //Se referencia cada input de manera dinamica capturando su valor

        console.log(this.state);
    };

    //se aplica el patron de diseño: Controlled input
    render(){
        return(
            <div className='contact'>
                <h2>¿Tienes alguna consulta?</h2>
                <span>Contáctenos de manera más rápida, completano el siguiente formulario:</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="nombre"
                        type="text"
                        handleChange={this.handleChange}
                        value={this.state.nombre}
                        label="Nombre y apellidos"
                        required
                    />
                    <FormInput 
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="Email"
                        required
                    />
                    <FormInput 
                        name="telefono"
                        type="text"
                        handleChange={this.handleChange}
                        value={this.state.telefono}
                        label="Telefono"
                        required
                    />
                    <FormInput 
                        name="ciudad"
                        type="text"
                        handleChange={this.handleChange}
                        value={this.state.ciudad}
                        label="Ciudad"
                        required
                    />
                    <FormTextarea 
                        name="mensaje"
                        handleChange={this.handleChange}
                        value={this.state.mensaje}
                        label="Message"
                        required
                    />
                    
                    <div className='buttons'>
                        <CustomButton type="submit">Enviar</CustomButton>
                    </div>
                </form>
            </div>
        );
    };
}

export default Contact;
