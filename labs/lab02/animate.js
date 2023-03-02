/*function animate() {
	earth.rotation.x += 0.02;
	earth.rotation.y += 0.03;
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}*/

function animate_earth() {
	earth.rotation.y += speed
}

const d = 5;
var alpha = 0;
var dalpha = 2 * Math.PI / 1000
function animate_moon() {
	alpha += dalpha
	moon.position.y = 1;
	moon.position.x = d * Math.sin(alpha)
	moon.position.z = d * Math.cos(alpha)
}

var speed = 0.005;
function animate() {
	animate_earth()
	animate_moon()
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}