import React from 'react';
import ReactDOM from 'react-dom';

var Inventory = ( {size, count} ) => {

  return (
    <div class="size" title="{count}">
      {size}
    </div>
  )
}

export default Inventory;