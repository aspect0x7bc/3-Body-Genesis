import { BoxGeometry, MeshBasicMaterial, Mesh, BackSide, Texture } from "three";

export function createStarBox(size) {
  const skyBox = new BoxGeometry(size, size, size);
  const skyBoxMaterial = new MeshBasicMaterial({
    map: getRandomStarField(600, 2048, 2048),
    side: BackSide
  });
  const sky = new Mesh(skyBox, skyBoxMaterial);
  return sky;
}

export function createStarTexture() {
  return getRandomStarField(600, 2048, 2048)
}

function getRandomStarField(numberOfStars, width, height) {
  const canvas = document.createElement('CANVAS');

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');

  ctx.fillStyle="black";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < numberOfStars; ++i) {
    var radius = Math.random() * 2;
    var x = Math.floor(Math.random() * width);
    var y = Math.floor(Math.random() * height);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  const texture = new Texture(canvas);
  texture.needsUpdate = true;
  return texture;
};