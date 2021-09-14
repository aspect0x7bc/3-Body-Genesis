import { Mesh, MeshBasicMaterial, SphereGeometry, PointLight, Object3D } from 'three';

const speedPercent = 0.3;

class Body {
  constructor(r, t, color='white', size=1) {
    this.body = new Object3D();

    this.geometry = new SphereGeometry(size, 20, 20);
    this.material = new MeshBasicMaterial({ color: color });
    this.sphere = new Mesh(this.geometry, this.material);
    this.body.add(this.sphere);

    this.light = new PointLight(color, 20, 100);
    this.body.add(this.light);

    this.currentPoint = 0;
    this.currentTime = 0;
    this.maxPoint = r.length - 1;
    
    this.body.position.set(
      r[0][0] * 100,
      r[0][1] * 100,
      r[0][2] * 100
    );

    this.body.tick = (delta) => {
        var i = Math.floor(this.currentPoint);
        this.currentTime = this.currentTime + delta*speedPercent;
        // console.log('this.currentTime', this.currentTime)
        // console.log('t[i]', t[i])
        while(this.currentTime > t[i]) {
          i = i + 1;
        }
        this.currentPoint = i;
        if (i > this.maxPoint) {
            this.currentPoint = 0;
            this.currentTime = 0;
            i = 0;
        }

        this.body.position.set(
            r[i][0] * 100,
            r[i][1] * 100,
            r[i][2] * 100
        );
    }

    return this.body;
  }
}

export { Body };