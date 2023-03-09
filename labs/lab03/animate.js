/*function animate() {
	earth.rotation.x += 0.02;
	earth.rotation.y += 0.03;
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}*/

var speed = 0.005;
function rotate(obj) {
	obj.rotation.x += speed
	obj.rotation.z += speed
}

function animate() {
	for (let i = 0; i < n; i++) {
		rotate(cubes[i])
	}
	group.rotation.y += speed
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}