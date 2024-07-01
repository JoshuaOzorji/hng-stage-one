document.addEventListener("DOMContentLoaded", () => {
	const currentTimeUTCElement = document.getElementById("currentTimeUTC");
	const currentDayElement = document.getElementById("currentDay");

	function updateTimeAndDay() {
		const now = new Date();
		const daysOfWeek = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];

		const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);

		let hours = oneHourLater.getUTCHours();
		const minutes = oneHourLater.getUTCMinutes();
		const seconds = oneHourLater.getUTCSeconds();

		const ampm = hours >= 12 ? "PM" : "AM";

		hours = hours % 12;
		hours = hours ? hours : 12;

		const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
		const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

		const timeString = `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

		currentTimeUTCElement.textContent = timeString;
		currentDayElement.textContent = daysOfWeek[oneHourLater.getUTCDay()];
	}

	updateTimeAndDay();
	setInterval(updateTimeAndDay, 1000);
});
