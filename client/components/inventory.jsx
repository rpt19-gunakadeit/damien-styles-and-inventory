import React from 'react';
import ReactDOM from 'react-dom';

var Inventory = (props) => {

  return (
    <div class="size" title="{props.count}">
      {props.size}
    </div>
  )
}

export default Inventory;