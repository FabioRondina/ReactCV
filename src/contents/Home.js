import React, { Component } from 'react';
//importing the picture as "profilepic".
import profilepic from '../img/dexter.jpg';

class XYZ extends Component {
  render() {
    return (
        <div class = "container">   
        <img src={profilepic} className="profilepic"></img>
      </div>
    )
  }
}
export default XYZ
