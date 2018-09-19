document.getElementById("submit").onclick = function(element) {
	Input = document.getElementById('input-box');
	var lines = Input.value
		.split('\n')
		.filter(Boolean);
	console.log(Input.value);
	if (lines.length != 0) {
		arrno = Math.floor(Math.random() * lines.length);
		document.getElementById("output").innerHTML = lines[arrno];
	}
	else {
		document.getElementById("output").innerHTML = "No items";
	}
}
