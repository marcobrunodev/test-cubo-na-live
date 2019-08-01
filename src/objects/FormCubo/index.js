import React from 'react';

const FormCubo = props => (
    <form {...props} className="form-cubo">
        {props.children}
    </form>
);

export default FormCubo;