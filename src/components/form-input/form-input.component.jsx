import React from 'react';

import './form-input.styles.css';

const FormInput = ({ handleChange, label, ...otherFormProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherFormProps} placeholder={label} />
    </div>
);

export default FormInput;
