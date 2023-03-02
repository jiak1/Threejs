//SETUP STAGE
//-1 create a scene
const scene = new THREE.Scene()
const ratio = window.innerHeight / window.innerWidth

//-2 create a camera
const camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 1000)

//3- set the camera position
camera.position.set(0, 20, 20)
camera.lookAt(0, 0, 0.5)

//4- create a renderer and setup a renderer from WebGL
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//CREATE A SHAPE (i.e CUBE)
//1-create the cube material
const cubeMat = new THREE.MeshBasicMaterial()
//cubeMat.wireframe = true
//2-setup the cube color
cubeMat.color = new THREE.Color('#ff758c')

//3-decide on the visibility style (i.e wireframe)

//4-create the shape geometry(i.e cube)
const cubeGeo = new THREE.SphereGeometry(2)

//5- Build the cube from geometry and material
const cube = new THREE.Mesh(cubeGeo, cubeMat)

//6- set the shape position
cube.position.x = -2

//ADD THE SHAPE TO THE SCREEN AND RENDER THE VIEW
scene.add(cube)
renderer.render(scene, camera)
