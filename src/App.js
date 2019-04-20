import React, { Component } from 'react';
import 'aframe';
// import 'https://cdn.rawgit.com/mrturck/aframe-joystick/master/joystick.min.js';
// import 'aframe-animation-component';
import 'aframe-particle-system-component';
import logo from './logo.svg';
import './App.css';
import { Entity, Scene } from 'aframe-react';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }
  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
  componentDidMount() {
    document.querySelector('#refresh-button').addEventListener('click', function () {
      let camera = document.querySelector('#camera');
      camera.setAttribute('animation', 'property: position; to: -7.70839 16 28');
      console.log('CLICKED');

    });
  }
  render() {
    return (
      <a-scene joystick>
        <a-assets>
          <a-asset-item id="horse-obj" src={`https://us-central1-portfoliovr-7b79e.cloudfunctions.net/api/WoodenCabinObj.obj`}></a-asset-item>
          <a-asset-item id="horse-mtl" src={`https://us-central1-portfoliovr-7b79e.cloudfunctions.net/api/WoodenCabinObj.mtl`}></a-asset-item>
        </a-assets>
        <a-sky></a-sky>

        <a-camera id="camera" checkpoint-controls="mode:animate" wasd-controls="acceleration: 5000" position="0 16 64">
          <a-cursor color="#ffba70" position='0 0 -1'>

          </a-cursor>
        </a-camera>

        <a-entity camera look-controls id="home" mixin="giant" obj-model="obj: #horse-obj; mtl: #horse-mtl">        </a-entity>
        <a-entity id="refresh-button" geometry="" material="color: red" position="-7.70839 5.59318 32.13017"></a-entity>
      </a-scene>
    );
  }
}

export default App;
