import React from 'react';
import ReactDOM from 'react-dom';
import Thumb from './thumb.jsx';
import Sizes from './sizes.jsx';

var Styles = (props) => {

  return (
    <div class="styles-details">

      <div class="styles-leftRight">
        <div class="styles-sectionLeft">
          <div class="styles-productType">
            Men's Shoe
          </div>
          <div class="styles-productName">
            Blazer Mid '77 Vintage
          </div>   
        </div>
        <div class="styles-sectionRight">
          <div class="styles-priceSale">
            $69.97
          </div>  
          <div class="styles-priceRetail">
            $85
          </div> 
        </div>
      </div>

      <div class="styles-stylePicker">
        {sampleStyles ? sampleStyles.map((styleDetail, index) => {
            return <Thumb styleDetails={styleDetail} key={index}/>
        }): null}
      </div>

      <div class="styles-leftRight">
        <div class="styles-selectSize">
          Select Size
        </div>
        <div class="styles-sizeGuide">
          Size Guide
        </div>
      </div>

      <div class="styles-sizePicker">
        <Sizes styleDetails={sampleStyles[0]} key="0"/>
        {/* {sampleStyles ? sampleStyles.map((styleDetail, index) => {
            return <Sizes styleDetails={styleDetail} key={index}/>
        }): null} */}
      </div>

      <button class="styles-btnCart"> Add to Cart</button>
      <button class="styles-btnFavorite">Favorite &nbsp; <b>♡</b></button>
    </div>
  )
}

var sampleStyles = [
  {
    id: 10,
    code: 'AH7513-15',
    name: 'Phantom/Laser Fuchsia/Pink Rise/White',
    thumb: ('https://t.ly/nE6VA'),
    retail: 200,
    sale: 186.97,
    stock:[
      { size: '5', count: 3 },{ size: '5.5', count: 3 },
      { size: '6', count: 3 },{ size: '6.5', count: 3 },
      { size: '7', count: 3 },{ size: '7.5', count: 3 },
      { size: '8', count: 3 },{ size: '8.5', count: 3 },
      { size: '9', count: 3 },{ size: '9.5', count: 3 },
      { size: '10', count: 3 },{ size: '10.5', count: 3 },
      { size: '11', count: 3 },{ size: '11.5', count: 3 },
      { size: '12', count: 3 }]
  },
  {
    id: 11,
    code: 'FJ3165-16',
    name: '"Team Gold/Black/White/University Red"',
    thumb: ('https://t.ly/ggxv2'),
    retail: 160,
    sale: 160,
    stock:[
      { size: '5', count: 3 },{ size: '5.5', count: 3 },
      { size: '6', count: 3 },{ size: '6.5', count: 3 },
      { size: '7', count: 3 },{ size: '7.5', count: 3 },
      { size: '8', count: 3 },{ size: '8.5', count: 3 },
      { size: '9', count: 3 },{ size: '9.5', count: 3 },
      { size: '10', count: 3 },{ size: '10.5', count: 3 },
      { size: '11', count: 3 },{ size: '11.5', count: 3 },
      { size: '12', count: 3 }]
  },
  {
    id: 12,
    code: 'BN1303-17',
    name: 'Pacific Blue/Deep Royal Blue/White/White',
    thumb: ('https://t.ly/zyV2k'),
    retail: 180,
    sale: 162.97,
    stock:[
      { size: '5', count: 3 },{ size: '5.5', count: 3 },
      { size: '6', count: 3 },{ size: '6.5', count: 3 },
      { size: '7', count: 3 },{ size: '7.5', count: 3 },
      { size: '8', count: 3 },{ size: '8.5', count: 3 },
      { size: '9', count: 3 },{ size: '9.5', count: 3 },
      { size: '10', count: 3 },{ size: '10.5', count: 3 },
      { size: '11', count: 3 },{ size: '11.5', count: 3 },
      { size: '12', count: 3 }]
  },
  {
    id: 13,
    code: 'PK3305-18',
    name: 'Light Bone/Metallic Gold/University Red/Summit White',
    thumb: ('https://t.ly/7j0yJ'),
    retail: 180,
    sale: 169.97,
    stock:[
      { size: '5', count: 3 },{ size: '5.5', count: 3 },
      { size: '6', count: 3 },{ size: '6.5', count: 3 },
      { size: '7', count: 3 },{ size: '7.5', count: 3 },
      { size: '8', count: 3 },{ size: '8.5', count: 3 },
      { size: '9', count: 3 },{ size: '9.5', count: 3 },
      { size: '10', count: 3 },{ size: '10.5', count: 3 },
      { size: '11', count: 3 },{ size: '11.5', count: 3 },
      { size: '12', count: 3 }]
  },
]

export default Styles;