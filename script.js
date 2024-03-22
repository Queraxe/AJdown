const input = document.getElementById("timer_input");
const timer = document.getElementById("timer");

input.addEventListener("input", myFunction);

var timetodate = new Date();

function myFunction() {
	console.log(input.textContent);
	timetovalue = input.value;

	const timearray = timetovalue.split(":");

	timetodate.setHours(timearray[0]);
	timetodate.setMinutes(timearray[1]);

	update();
}

function update() {
	var timenow = new Date();

	var timediff = timetodate - timenow;

	var stunden = Math.floor(timediff / (1000 * 60 * 60));
	var minuten = Math.floor((timediff % (1000 * 60 * 60)) / (1000 * 60));
	var sekunden = Math.floor((timediff % (1000 * 60)) / 1000);
	var millisekunden = Math.floor(timediff % 1000);

	console.log();

	timer.innerHTML =
		stunden + ":" + minuten + ":" + sekunden + ":" + millisekunden;
}

setInterval(function () {
	update();
}, 1);
