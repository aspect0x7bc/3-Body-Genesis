import { WebGLRenderer } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  // ooo shiny (diabled by default for backwards compatability)
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };