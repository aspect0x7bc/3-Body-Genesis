import { Body } from './components/Body.js';
import { createCurve } from './components/curve.js'

import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
//import { createShadowBox } from './components/shadowBox.js';
import { createStarBox } from './components/starBox.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    // eslint-disable-next-line
    const controls = createControls(camera, renderer.domElement);
    // eslint-disable-next-line
    const resizer = new Resizer(container, camera, renderer);
  }

  // use scenes folder to organize these?
  setScene(solution, settings) {
    while (scene.children.length) {
      scene.remove(scene.children[0]);
    }

    let r1, r2, r3, t, sphere0, sphere1, sphere2, curve0, curve1, curve2;

    switch (settings.era) {
      case 'genesis':
        r1 = solution[0];
        r2 = solution[1];
        r3 = solution[2];
        t = solution[3];

        sphere0 = new Body(r1, t, settings.colors[0]);
        sphere1 = new Body(r2, t, settings.colors[1]);
        sphere2 = new Body(r3, t, settings.colors[2]);
        loop.updatables.push(sphere0, sphere1, sphere2);
        scene.add(sphere0, sphere1, sphere2)

        if (settings.paths) {
          curve0 = createCurve(r1, settings.colors[0])
          curve1 = createCurve(r2, settings.colors[1])
          curve2 = createCurve(r3, settings.colors[2])
          scene.add(curve0, curve1, curve2);
        }
        if (settings.background === 'space') {
          const starBox = createStarBox(2000)
          scene.add(starBox)
        }

        break;

      // case 'four':
      //   r1 = solution[0];
      //   r2 = solution[1];
      //   r3 = solution[2];
      //   r4 = solution[3];
      //   t = solution[4];

      //   sphere = new Body(r1, t);
      //   sphere0 = new Body(r2, t);
      //   sphere1 = new Body(r3, t);
      //   sphere2 = new Body(r4, t, 'blue', 0.5);

      //   //shadowBox = createShadowBox(150);

      //   loop.updatables.push(sphere, sphere0, sphere1, sphere2);
      //   scene.add(sphere, sphere0, sphere1, sphere2);
      //   break;

      default:
        r1 = solution[0];
        r2 = solution[1];
        r3 = solution[2];
        t = solution[3];

        sphere0 = new Body(r1, t);
        sphere1 = new Body(r2, t);
        sphere2 = new Body(r3, t);

        // const shadowBox = createShadowBox(150);
        const starBox = createStarBox(2000);

        loop.updatables.push(sphere0, sphere1, sphere2);
        scene.add(sphere0, sphere1, sphere2, starBox);
        break;
    }
  }

  render() {
    renderer.render(scene, camera);
  }

  // loop, bounce, goToFrame, speedadjustments?

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export default World;