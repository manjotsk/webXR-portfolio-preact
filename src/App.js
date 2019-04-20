import React, { Component } from 'react';
import 'aframe';
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
  render() {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" />
          <a-asset-item id="horse-obj" src='http://localhost:1222/WoodenCabinObj.obj'></a-asset-item>
          <a-asset-item id="horse-mtl" src='http://localhost:1222/WoodenCabinObj.mtl'></a-asset-item>
        </a-assets>
        <a-sky></a-sky>
        <a-camera position="0 16 54"></a-camera>
        <a-entity id="home" mixin="giant" obj-model="obj: #horse-obj; mtl: #horse-mtl">
        </a-entity>
        {/* <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{ property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150 }} />
        </Entity> */}
      </Scene>
    );
  }
}

export default App;
