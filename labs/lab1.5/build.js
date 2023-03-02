//sphere properties: radius, vlines, hlines and color(r,g,b)
//The function should return a sphere using the parametrized properties

//Initialize 2 sphere objects (earth and moon)

//Define a function to add shapes to scene
const Cube = (w, h, d, c, wireframe = false) => {
	const cubeMat = new THREE.MeshBasicMaterial()
	cubeMat.wireframe = wireframe

	cubeMat.color = new THREE.Color(c)

	const cubeGeo = new THREE.BoxGeometry(w, h, d)

	return new THREE.Mesh(cubeGeo, cubeMat)
}

const cube1 = Cube(1, 2, 8, '#ff758c')
const addShapes = () => {
	scene.add(cube1)
}
