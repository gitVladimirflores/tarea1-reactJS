import React from 'react';

import './custom-button.styles.css';

//Se aplica el patron de diseño Style components buttons
const CustomButton = ({ children, ...otherButtonsProps }) => (
    <button className="custom-button" {...otherButtonsProps} >
    {children}    
    </button>    
);
//El children llama a las propiedades secundarias como el nombre del boton
export default CustomButton;
