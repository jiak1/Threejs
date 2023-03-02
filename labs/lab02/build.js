function createCube(w, h, d, col, wf) {
	var cube_material = new THREE.MeshBasicMaterial();
	cube_material.color = new THREE.Color(col);
	cube_material.wireframe = wf;
	var cube_geo = new THREE.BoxGeometry(w, h, d);
	var cube = new THREE.Mesh(cube_geo, cube_material);
	return cube;
}

function createSphere(rad, hlines, vlines, col, wf) {
	var sphere_material = new THREE.MeshBasicMaterial();
	sphere_material.color = new THREE.Color(col);
	sphere_material.wireframe = wf;
	var sphere_geo = new THREE.SphereGeometry(rad, hlines, vlines);
	var sphere = new THREE.Mesh(sphere_geo, sphere_material);
	return sphere;
}

//var cube1 = createCube(3, 3, 3, '#e91e63', true);
var earth = createSphere(2, 44, 44, '#63e91e', true)
var moon = createSphere(1, 60, 60, '#454843', false)

function addShapes() {
	scene.add(earth);
	scene.add(moon)
	renderer.render(scene, camera);
}