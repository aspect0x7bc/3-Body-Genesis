import { Color, Scene } from 'three';

function createScene() {
  const scene = new Scene();

  scene.background = new Color('black');
  //scene.fog = new FogExp2( 0xa59cff, 0.0025 );
  // switch(background) {
  //   case 'space':
  //     // const cubemap = new CubeTextureLoader()
  //     //   .setPath('../textures/cubemap/')
  //     //   .load ([
  //     //     'px.png',
  //     //     'nx.png',
  //     //     'py.png',
  //     //     'ny.png',
  //     //     'pz.png',
  //     //     'nz.png'
  //     //   ]);
  //       scene.background = createStarTexture();
  //       return scene;

  //   case 'black':
  //     scene.background = new Color('black');
  //     return scene;

  //   default:
  //     return scene;
  // }
  return scene;
}

export { createScene };