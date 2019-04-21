import React, { Component } from 'react';
import 'aframe';
// import 'https://cdn.rawgit.com/mrturck/aframe-joystick/master/joystick.min.js';
// import 'aframe-animation-component';
import 'aframe-particle-system-component';
import logo from './logo.svg';
import './App.css';
import { Entity, Scene } from 'aframe-react';
require('aframe-physics-system');


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
  /**
   * corners
   * x-bredth ,y=height, z=length
   * ________________________________________________________________
  * |x: -21.641588161068125                    x: -21.686282251008972|
  * |y: 5.42248294399009                       y: 5.422482953332246  |
  * |z: 32.12562696514753                      z: -32.24175285053801 |
  *                                                                  |
  *                                                                  |
  *                                                                 |
  * |                                                                |
  * |                                                                |
  * |                                                                |
  * |x: 21.7006089728026                        x: 21.995038278372   |
    |y: 5.422482050584691                       y: 5.422482013702393 |
    |z: 32.16083180175642                       z: -32.17376469794766|                   
    |________________________________________________________________|
   */
  componentDidMount() {
    document.querySelector('#refresh-button').addEventListener('click', function () {
      let camera = document.querySelector('#camera');
      camera.setAttribute('animation', 'property: position; to: -7.70839 16 28');
      console.log('CLICKED');

    });
    document.querySelector('#home').addEventListener('click', function (e) {
      console.log(e);
      var x = e.detail.intersection.point.x, y = e.detail.intersection.point.y, z = e.detail.intersection.point.z;
      let camera = document.querySelector('#camera');
      if (e.detail.intersection.point.x < -5) {
        x = -12
      }
      if (e.detail.intersection.point.x > 5) {
        x = 12
      }
      if (e.detail.intersection.point.z < -20) {
        z = -20
      }
      if (e.detail.intersection.point.z > 20) {
        z = 20
        if (e.detail.intersection.point.z > 32) {
          x = -7.70839
          z = 30
        }
      }
      camera.setAttribute('animation', `property: position; to: ${x} 16 ${z}`);


    });
  }
  render() {
    return (
      <a-scene physics="debug: true" joystick>
        <a-assets>
          <a-asset-item id="horse-obj" src={`https://us-central1-portfoliovr-7b79e.cloudfunctions.net/api/WoodenCabinObj.obj`}></a-asset-item>
          <a-asset-item id="horse-mtl" src={`https://us-central1-portfoliovr-7b79e.cloudfunctions.net/api/WoodenCabinObj.mtl`}></a-asset-item>
        </a-assets>
        <a-sky color="#ECECEC"></a-sky>

        <a-entity geometry="" dynamic-body  >
          <a-camera id="camera" checkpoint-controls="mode:animate" wasd-controls="acceleration: 500" position="0 16 64">
            <a-cursor color="#ffba70" position='0 0 -1'>

            </a-cursor>
          </a-camera>
        </a-entity>

        <a-entity static-body camera look-controls id="home" mixin="giant" obj-model="obj: #horse-obj; mtl: #horse-mtl">        </a-entity>
        <a-entity id="refresh-button" geometry="" material="color: red" position="-7.70839 5.59318 32.13017"></a-entity>
      </a-scene>
    );
  }
}

export default App;
