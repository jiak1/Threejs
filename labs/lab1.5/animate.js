//Define a function to animate the earth object to spin at 0.005 speed
const animate = () => {
	cube1.rotation.x += 0.02;
	cube1.rotation.y += 0.01;
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}

//Define a function to animate the moon object to rotate around the earth
//Rotation positions x and y are determined using the distance from earth multiplied by cos and sin of alpha angle