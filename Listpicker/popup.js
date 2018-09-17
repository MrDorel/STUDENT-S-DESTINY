let Submit = document.getElementById('submit');
let Input = document.getElementById('input-box');

var lines = require('fs').readFileSync('Input', 'utf-8')
	.split('\n')
	.filter(Boolean);
arrno = Math.floor(Math.random() * lines.length);
document.getElementById("output").innerHTML = lines[arrno];