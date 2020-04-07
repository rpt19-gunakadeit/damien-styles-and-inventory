import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './inventory.jsx';

var Sizes = (props) => {

  return (
    <div class="inventory">
    {props.styleDetails.stock ? props.styleDetails.stock.map((stock, index) => {
        return <Inventory size={stock.size} count={stock.count} key={index}/>
    }): null}
  </div>
  )
}

export default Sizes;