import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

class TestSpace extends Component {
  render() {
    return (
      <div className="condiv">
      <h1 className="subtopic">TestSpace playground</h1>
      <ReactTypingEffect className="typingeffect" 
        text={['Finally completed the lab','seems pretty straigh forward so far']} 
        text={['Finally completed the lab','seems pretty straigh forward so far']} 
        speed={100} 
        eraseDelay={700}/>
      </div>
    )
  }
}
export default TestSpace
