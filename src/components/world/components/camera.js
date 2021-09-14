import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(
    45, // fov = Field Of View
    1, // aspect ratio (dummy value - set in Resizer)
    1, // near clipping plane
    5000, // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(75, 75, 500);

  return camera;
}

export { createCamera };