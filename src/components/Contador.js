import React from 'react';
import '../stylesheets/Contador.css'

function Contador({ clickNumber }){
    return (
        <div className='contador'>
            {clickNumber}
        </div>
    )
}

export default Contador;