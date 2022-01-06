
import React, { useState } from 'react';
import './App.css';
import { Input } from './Input';
import { CardList } from './CardList';

function App() {
  const [cityValue, setCityValue] = useState([]);
  return (
    <div className="Main">
      <Input setCityValue={setCityValue} />
    {/*   {cityValue.length === 1 && <CardList cityValue={cityValue} />}  */}
    <CardList cityValue={cityValue} />
    </div>
  );
}

export default App;
