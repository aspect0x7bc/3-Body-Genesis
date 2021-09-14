import { Clock } from 'three';

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = [];
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick();
            this.renderer.render(this.scene, this.camera);
        });
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        const delta = clock.getDelta();

        // this can be fixed but upgrading react-scripts to 3.1.2 but I am scared... yarn add --exact react-scripts@3.1.2
        // eslint-disable-next-line
        for (const object of this.updatables) {
            object.tick(delta);
        }
    }
}

export { Loop }