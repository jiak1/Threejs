function createCube(w, h, d, col, wf) {
	var cube_material = new THREE.MeshBasicMaterial();
	cube_material.color = new THREE.Color(col);
	cube_material.wireframe = wf;
	var cube_geo = new THREE.BoxGeometry(w, h, d);
	var cube = new THREE.Mesh(cube_geo, cube_material);
	return cube;
}

//var cube1 = createCube(3, 3, 3, '#e91e63', true);
//var earth = createCube(2, 44, 44, '#63e91e', true)
//var moon = createCube(1, 60, 60, '#454843', false)

const n = 36
let cubes = []
const group = new THREE.Group()

const createCubes = () => {
	for (let i = 0; i < n; i++) {
		let rot = new THREE.Matrix4()
		let rot2 = new THREE.Matrix4()
		let sca = new THREE.Matrix4()
		let tra = new THREE.Matrix4()

		const combined = new THREE.Matrix4()

		rot.makeRotationY(i * (Math.PI / n))
		rot2.makeRotationZ(i * (Math.PI / n))
		sca.makeScale(0.5, 3, 1.5)
		tra.makeTranslation(10, 5, 0)

		combined.multiply(rot)
		combined.multiply(rot2)
		combined.multiply(sca)
		combined.multiply(tra)

		let color = new THREE.Color()
		color.setHex(Math.random() * 0xffffff)
		cubes[i] = createCube(1, 1, 1, color, true)
		cubes[i].applyMatrix(combined)

		group.add(cubes[i])
	}
}

function addShapes() {
	scene.add(group);
	renderer.render(scene, camera);
}