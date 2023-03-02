//Declare the system variables
let scene
let camera
let renderer

//setup the system components: scene, camera, renderer
const setup = () => {
	scene = new THREE.Scene()
	ratio = window.innerHeight / window.innerWidth

	//-2 create a camera
	camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 1000)

	//3- set the camera position
	camera.position.set(0, 20, 20)
	camera.lookAt(0, 0, 0.5)

	//4- create a renderer and setup a renderer from WebGL
	renderer = new THREE.WebGLRenderer()
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)
}

const resizeScene = () => {
	renderer.setSize(window.innerWidth, window.innerHeight)
	camera.aspect = window.innerHeight / window.innerWidth
	camera.updateProjectionMatrix()
	renderer.render(scene, camera)
}
