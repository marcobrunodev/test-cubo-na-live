import React from 'react';
import "./styles.css"

const InputCubo = ({ className = "", type = "text", placeholder = "" }) => (
    <input className={`input-cubo ${className}`} type={type} placeholder={placeholder} />
);

export default InputCubo;