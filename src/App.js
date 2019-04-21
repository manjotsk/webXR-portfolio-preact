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
  * |                                                                |
  *                                                                  |
  *                                                                  |
  *                                                                  |
  * |                                                                |
  * |                                                                |
  * |x: 21.7006089728026                        x: 21.995038278372   |
    |y: 5.422482050584691                       y: 5.422482013702393 |
    |z: 32.16083180175642                       z: -32.17376469794766|                   
    |________________________________________________________________|
   */

  componentDidMount() {
    let camera = document.querySelector('#camera');
    document.querySelector('#home').addEventListener('click', function (e) {
      console.log(e);
      var x = -7.7, y = 16, z = 128
      if (e.detail.intersection) {
        x = e.detail.intersection.point.x; y = e.detail.intersection.point.y; z = e.detail.intersection.point.z;
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
      }
      camera.setAttribute('animation', `property: position; to: ${x} 16 ${z}`);


    });
  }
  render() {
    return (
      <a-scene cursor="rayOrigin: mouse" physics="debug: true" joystick>
        <a-assets>
          <a-asset-item id="horse-obj" src={`https://us-central1-portfoliovr-7b79e.cloudfunctions.net/api/WoodenCabinObj.obj`}></a-asset-item>
          <a-asset-item id="horse-mtl" src={`https://us-central1-portfoliovr-7b79e.cloudfunctions.net/api/WoodenCabinObj.mtl`}></a-asset-item>
        </a-assets>
        <a-sky color="#ECECEC"></a-sky>

        <a-entity movement-controls="controls: checkpoint" geometry="" dynamic-body  >
          <a-camera id="camera" checkpoint-controls="mode:animate" wasd-controls="acceleration: 500" position="0 16 128">
            <a-cursor position="0 0 -1"
              geometry="primitive: ring; radiusInner: 0.005; radiusOuter: 0.01;"
              material="color: #CCC; shader: flat;" color="#ffba70" position='0 0 -1'>
            </a-cursor>
          </a-camera>
        </a-entity>
        <a-entity text="value: Manjot's Home (Under Construction) ; color: #c19a6b ; shader: msdf; font: https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/merienda/Merienda-Bold.json; align: center; alphaTest: 0.11; opacity: 0.55" position="-0.55342 26.79909 34.08816" scale="50 50 50"></a-entity>
        <a-entity static-body camera look-controls id="home" mixin="giant" obj-model="obj: #horse-obj; mtl: #horse-mtl">        </a-entity>
      </a-scene>
    );
  }
}

export default App;
