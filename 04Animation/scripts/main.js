

// changing individual properties with code and using setInterval
var rotationSpeed = 0.3;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}

function spin(){
	myOtherBox.object3D.rotation.y -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.y);
}

function spin(){
	myOtherBox.object3D.rotation.z -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.z);
}

setInterval(spin, 16); //equivalent to 60 fps