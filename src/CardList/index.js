import React, { useEffect } from 'react';

import '../App.css';
import { Card } from '../Card';
export const CardList = ({cityValue}) => {

  return (
    <div className="CardList">
        {
          cityValue.map( city =>  <Card key={city} city={city} />  )
        }
      </div>
  );
}
