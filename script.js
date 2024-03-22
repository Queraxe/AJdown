const input = document.getElementById("timer_input");
const timer = document.getElementById("timer");

input.addEventListener("input", myFunction);

var timetodate = new Date();

function myFunction() {
	timetovalue = input.value;

	const timearray = timetovalue.split(":");

	timetodate.setHours(timearray[0]);
	timetodate.setMinutes(timearray[1]);
	timetodate.setSeconds(0);
	timetodate.setMilliseconds(0);

	var now = new Date();

	if (now > timetodate) {
		timetodate.setDate(now.getDate() + 1);
	}

	setInterval(function () {
		update();
	}, 1);
}

function update() {
	var timenow = new Date();

	var timediff = timetodate - timenow;

	var stunden = (Math.floor(timediff / (1000 * 60 * 60)) / 100)
		.toFixed(2)
		.split(".")[1];
	var minuten = (
		Math.floor((timediff % (1000 * 60 * 60)) / (1000 * 60)) / 100
	)
		.toFixed(2)
		.split(".")[1];
	var sekunden = (Math.floor((timediff % (1000 * 60)) / 1000) / 100)
		.toFixed(2)
		.split(".")[1];
	var millisekunden = (Math.floor(timediff % 1000) / 1000)
		.toFixed(3)
		.split(".")[1];

	if (timediff <= 0) {
		timer.innerHTML = "STOP";
	} else {
		timer.innerHTML =
			stunden + ":" + minuten + ":" + sekunden + ":" + millisekunden;
	}
}
