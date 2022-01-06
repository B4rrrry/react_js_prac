import React, { useState, useRef } from 'react';

import '../App.css';

export const Input = ({setCityValue}) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const handleOnChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleOnClick = () => {
    setCityValue((currentArray)=> [...currentArray,inputValue ] )
    inputRef.current.focus();
  }
  return (
    <div className="InputWrap">
      <input className="Input" onChange={handleOnChange} value={inputValue} ref={inputRef}></input>
      <button className="Button" onClick={handleOnClick}>+</button>
    </div>
  );
}
