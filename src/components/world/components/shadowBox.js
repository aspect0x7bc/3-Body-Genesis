import { Mesh, MeshPhongMaterial, Object3D, PlaneGeometry } from 'three';

function createShadowBox(size) {
    const box = new Object3D();

    const geometry = new PlaneGeometry(size,size);

    const bottom = new Mesh( geometry, new MeshPhongMaterial({color: 0xffffff}));
    bottom.rotateX( - Math.PI / 2 );
    bottom.translateZ(-size/2);
    box.add( bottom );

    const top = new Mesh( geometry, new MeshPhongMaterial({color: 0xffffff}));
    top.rotateX( Math.PI / 2 );
    top.translateZ(-size/2);
    box.add( top );

    const back = new Mesh( geometry, new MeshPhongMaterial( { color: 0xffffff } ) );
    back.translateZ(-size/2);
    box.add( back );

    const front = new Mesh( geometry, new MeshPhongMaterial( { color: 0xffffff } ) );
    front.rotateX( Math.PI );
    front.translateZ(-size/2);
    box.add( front );

    const left = new Mesh( geometry, new MeshPhongMaterial( { color: 0xffffff } ) );
    left.rotateY( Math.PI / 2 );
    left.translateZ(-size/2);
    box.add( left );

    const right = new Mesh( geometry, new MeshPhongMaterial( { color: 0xffffff } ) );
    right.rotateY( - Math.PI / 2 );
    right.translateZ(-size/2);
    box.add( right );

    return box;
}

export { createShadowBox };