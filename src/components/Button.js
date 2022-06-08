import React from 'react';
import '../stylesheets/Button.css';

export default function Button({texto,isButtonClick,handleClick}){
    return (
        <button 
        className={ isButtonClick ? 
        'button-click': 'button-restart' }
        onClick={handleClick}>
            {texto}
        </button>
    );
}