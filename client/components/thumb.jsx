import React from 'react';
import ReactDOM from 'react-dom';

var Thumb = (props) => {

  return (
    <div class="thumb" onclick={(e) => {this.bind(alert(this.props.styleDetails)) }}>
      <img src={props.styleDetails.thumb} title={props.styleDetails.name}></img>
      {/* <img onclick={(e) => {this.props.setStyleDetails(this.props.styleDetails) }} src={props.styleDetails.thumb} title={props.styleDetails.name}></img> */}
    </div>
  )
}

export default Thumb;