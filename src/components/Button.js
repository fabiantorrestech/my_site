import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


const STYLES = ['btn-primary', 'btn-outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    // will automatically apply 'btn-primary' if buttonStyle is not specified.
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    // will automatically apply 'btn-medium' if buttonSize is not specified.
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
};
