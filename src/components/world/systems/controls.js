import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);
    controls.enablePan = false;
    controls.maxDistance = 6000;
    controls.minDistance = 100;

    return controls;
}

export { createControls };