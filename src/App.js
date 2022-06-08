import './App.css';
import Button from './components/Button';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [clickNumber,setClickNumber] = useState(0);

  const handleClick = () => {
    setClickNumber(clickNumber+1);
  };

  const restart = () => {
    setClickNumber(0);
  };

  return (
    <div className="App">
       <div className='freecodecamp-logo-container'>
         <img 
         className='freecodecamp-logo' 
         src={freeCodeCampLogo}
         alt='Logo de freeCodeCamp'/>
       </div>
       <div className='container-principal'>
        <Contador clickNumber={clickNumber}/>
        <Button
        texto='Click'
        isButtonClick={true}
        handleClick={handleClick}/>
        <Button
        texto='Restart'
        isButtonClick={false}
        handleClick={restart}/>
       </div>
    </div>
  );
}

export default App;
