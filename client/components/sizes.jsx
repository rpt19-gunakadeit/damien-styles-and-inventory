import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './inventory.jsx';

var Sizes = ( {styleDetails} ) => {

  return (
    <div class="inventory">
    {styleDetails.stock ? styleDetails.stock.map((stock, index) => {
        return <Inventory size={stock.size} count={stock.count} key={index}/>
    }): null}
  </div>
  )
}

export default Sizes;