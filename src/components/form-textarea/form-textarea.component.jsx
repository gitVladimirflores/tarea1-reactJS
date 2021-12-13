import React from 'react';

import './form-textarea.styles.css';

const FormTextarea = ({ handleChange, label, ...otherFormProps}) => (
    <div className="group">
        <textarea className="message" onChange={handleChange} {...otherFormProps} rows="10" cols="50">{label}</textarea>
    </div>
);

export default FormTextarea
