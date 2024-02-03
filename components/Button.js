import React from 'react';

const Button = ({ children, extraclass = '' }) => {
    return (
        <button className={"btn-style-primary " + extraclass}>
            {children}
        </button>
    )
}

export default Button;