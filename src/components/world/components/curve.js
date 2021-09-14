import { CatmullRomCurve3, Vector3, BufferGeometry, LineBasicMaterial, Line } from 'three'

function createCurve(r, color) {
  const rVector3 = []
  // this can be fixed but upgrading react-scripts to 3.1.2 but I am scared... yarn add --exact react-scripts@3.1.2
  // eslint-disable-next-line
  for (const p of r) rVector3.push(new Vector3(p[0]*100, p[1]*100, p[2]*100))
  const curve = new CatmullRomCurve3(rVector3)
  const points = curve.getPoints(200)
  const curveGeometry = new BufferGeometry().setFromPoints(points)
  const curveMaterial = new LineBasicMaterial({color: color})
  const curveObject = new Line(curveGeometry, curveMaterial)

  return curveObject
}

export { createCurve }