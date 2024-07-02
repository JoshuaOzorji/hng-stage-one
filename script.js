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

		let hours = now.getUTCHours();
		const minutes = now.getUTCMinutes();
		const seconds = now.getUTCSeconds();
		const ampm = hours >= 12 ? "PM" : "AM";
		hours = hours % 12;
		hours = hours ? hours : 12;

		const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
			.toString()
			.padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;

		currentTimeUTCElement.textContent = formattedTime;
		currentDayElement.textContent = daysOfWeek[now.getUTCDay()];
	}

	updateTimeAndDay();
	setInterval(updateTimeAndDay, 1000);
});
