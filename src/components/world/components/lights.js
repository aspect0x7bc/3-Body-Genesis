import { DirectionalLight } from 'three';

let radius = 10;
let theta = 0;
let radPerSecond = Math.PI / 4.0;

function createLights() {
    const light = new DirectionalLight('white', 8);

    light.position.set(Math.sin(theta) * radius,
                       0,
                       Math.cos(theta) * radius);

    light.tick = (delta) => {
        theta += radPerSecond * delta;
        light.position.set(Math.sin(theta) * radius,
                           0,
                           Math.cos(theta) * radius);
    } 

    return light;
}

export { createLights };