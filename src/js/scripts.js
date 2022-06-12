const inputEndDate = document.getElementById('end-date');
const inputEndTime = document.getElementById('end-time');
const inputDescription = document.getElementById('description');

const outputTimer = document.getElementById('timer');

const daysCount = document.getElementById('days-count');
const hoursCount = document.getElementById('hours-count');
const minutesCount = document.getElementById('minutes-count');
const secondsCount = document.getElementById('seconds-count');
const millisecondsCount = document.getElementById('milliseconds-count');



(function() {

	setInterval(updateTimer, 1000);

})();

async function updateTimer() {
	let delta = new Date(inputEndDate.value + " " + inputEndTime.value).getTime() - Date.now();
	daysCount.innerText = getDays(delta);
	hoursCount.innerText = getHours(delta);
	minutesCount.innerText = getMinutes(delta);
	secondsCount.innerText = getSeconds(delta);
	millisecondsCount.innerText = getMilliseconds(delta);
}


function getMilliseconds(time) {
	return Math.abs(time) % 1000;
}

function getSeconds(time) {
	return Math.floor(Math.abs(time) / 1000) % 60;
}

function getMinutes(time) {
	return Math.floor(Math.abs(time) / (1000 * 60)) % 60;
}

function getHours(time) {
	return Math.floor(Math.abs(time) / (1000 * 60 * 60)) % 24;
}

function getDays(time) {
	return Math.floor(Math.abs(time) / (1000 * 60 * 60 * 24))
}