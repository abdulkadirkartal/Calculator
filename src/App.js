import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [DarkTheme, setDarkTheme] = useState(false);

  // 1. fonksiyon
  const numberClick = (Number) => {
    setInputValue((eskiValue) => eskiValue + Number);
  };

  // 2. fonksiyon
  const operatorClick = (operator) => {
    setInputValue((eskiValue) => eskiValue + operator);
  };

  // 3. fonksiyon
  const islemClick = () => {
    try {
      setInputValue(eval(inputValue));
    } catch (error) {
      setInputValue('errorr!!!');
    }
  };

  // 4. fonksiyon
  const clearClick = () => {
    setInputValue('');
  };

  // 5. fonksiyon
  const backClick = () => {
    setInputValue((eskiValue) => eskiValue.slice(0, -1));
  };

  //6. fonsiyon
  const changeTheme = () => {
    setDarkTheme((eskiState) => !eskiState);
  };


  return (

    <div className={`calculator ${DarkTheme ? 'dark' : 'light'}`}>


      <h1 className="baslik">Hesap Makinası</h1>
      <input type="text" className="display" value={inputValue} readOnly />
      <div className="buttons">

        <button className="button-number" onClick={() => numberClick('7')}>7</button>
        <button className="button-number" onClick={() => numberClick('8')}>8</button>
        <button className="button-number" onClick={() => numberClick('9')}>9</button>
        <button className="button-operator" onClick={() => operatorClick('/')}>/</button>

        <button className="button-number" onClick={() => numberClick('4')}>4</button>
        <button className="button-number" onClick={() => numberClick('5')}>5</button>
        <button className="button-number" onClick={() => numberClick('6')}>6</button>
        <button className="button-operator" onClick={() => operatorClick('*')}>*</button>

        <button className="button-number" onClick={() => numberClick('1')}>1</button>
        <button className="button-number" onClick={() => numberClick('2')}>2</button>
        <button className="button-number" onClick={() => numberClick('3')}>3</button>
        <button className="button-operator" onClick={() => operatorClick('-')}>-</button>

        <button className="button-number" onClick={() => numberClick('.')}>.</button>
        <button className="button-number" onClick={() => numberClick('0')}>0</button>
        <button className="button-equal" onClick={() => islemClick('=')}>=</button>
        <button className="button-operator" onClick={() => operatorClick('+')}>+</button>

        <button className="button-backspace" onClick={() => backClick()}>←</button>
        <button className="button-clear" onClick={() => clearClick()}>C</button>

        <button className="theme-toggle-button" onClick={changeTheme}>
          {DarkTheme ? '☀︎' : '☾'}
        </button>

      </div>
    </div>
  );
};

export default App;
