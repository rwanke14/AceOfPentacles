$(document).ready(function () {
	$("#submitDate").on("click", function (e) {
		e.preventDefault();
		// Pulling the value for the month and day when clicked
		var day = $("#day").val();
		var month = $("#month").val();
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		var yyyy = today.getFullYear();

		today = mm + "/" + dd + "/" + yyyy;

		// Calling the function and grabbing the day and month
		var sign = getZodiacSign(day, month);
		// Making sure the user inputs a valid input for both month and day
		if (
			typeof day === NaN ||
			day === "" ||
			typeof month === NaN ||
			month === ""
		) {
			alert("Please input a valid response.");
		} else {
			const settings = {
				async: true,
				crossDomain: true,
				url: `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`,
				method: "POST",
				headers: {
					"x-rapidapi-key":
						"64fc9c6553msha1f5a8a6cbed132p105638jsn37d9c0c703f2",
					"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
				},
			};
			$.ajax(settings).done(function (response) {
				getPic(sign);

				//Inputing the api call and zodiac sign to html

				document.querySelector(".main").innerHTML = `
        
					<p><strong>Sign:</strong> ${sign.charAt(0).toUpperCase() + sign.slice(1)}</p>
							<p><strong>Todays Date:</strong> ${today}</p>
					<p><strong>Todays Reading:</strong> ${response.description}</p>
					<p><strong>Compatibility: </strong> ${response.compatibility}</p>
					<p><strong>Lucky Number: </strong>${response.lucky_number}</p>
					<p><strong>Lucky Time: </strong>${response.lucky_time}</p>`;

				// Setting Local Storage
				localStorage.setItem(
					"Zodiac Sign",
					sign.charAt(0).toUpperCase() + sign.slice(1)
				);
				localStorage.setItem("Day", day);
				localStorage.setItem("Month", month);
				localStorage.setItem("Todays Date", today);
				localStorage.setItem("Todays Reading", response.description);
				localStorage.setItem("Compatibility", response.compatibility);
				localStorage.setItem("Lucky Number", response.lucky_number);
				localStorage.setItem("Lucky Time", response.lucky_time);
			});
			// update local storage daily
		}
	});

	$(day).val(localStorage.getItem("Day"));
	$(month).val(localStorage.getItem("Month"));
	if (
		localStorage.getItem("Zodiac Sign") !== null &&
		localStorage.getItem("Todays Date") !== null &&
		localStorage.getItem("Todays Reading") !== null &&
		localStorage.getItem("Compatibility") !== null &&
		localStorage.getItem("Lucky Number") !== null &&
		localStorage.getItem("Lucky Time") !== null
	) {
		$("#sign").text(`Sign: ${localStorage.getItem("Zodiac Sign")}`);
		$("#todaysDate").text(
			`Todays Date: ${localStorage.getItem("Todays Date")}`
		);
		$("#reading").text(
			`Todays Date: ${localStorage.getItem("Todays Reading")}`
		);
		$("#compatibility").text(
			`Todays Date: ${localStorage.getItem("Compatibility")}`
		);
		$("#luckyNum").text(
			`Lucky Number: ${localStorage.getItem("Lucky Number")}`
		);
		$("#luckTime").text(`Lucky Time: ${localStorage.getItem("Lucky Time")}`);
	}

	$("#clear").click(function (e) {
		// clears the input fields and text fields and reloads page.
		e.preventDefault();
		localStorage.removeItem("Zodiac Sign");
		localStorage.removeItem("Todays Date");
		localStorage.removeItem("Todays Reading");
		localStorage.removeItem("Compatibility");
		localStorage.removeItem("Lucky Number");
		localStorage.removeItem("Lucky Time");
		localStorage.removeItem("Day");
		localStorage.removeItem("Month");
		$(".main").empty();
		$("#month").empty();
		$("#day").empty();
		location.reload();
	});

	$(document).ready(function () {
		var zodiacSign = localStorage.getItem("Zodiac Sign");

		if (zodiacSign) {
			getPic(zodiacSign);
		}
	});

	// Used Kladov/ getZodiacSign.js on github for the function... https://gist.github.com/kladov/5080233...
	/**
	 * Return zodiac sugn by month and day
	 *
	 * @param day
	 * @param month
	 * @return {string} name of zodiac sign
	 */
	function getZodiacSign(day, month) {
		var zodiacSigns = {
			cap: "capricorn",
			aqua: "aquarius",
			pis: "pisces",
			ari: "aries",
			taur: "taurus",
			gem: "gemini",
			can: "cancer",
			leo: "leo",
			vir: "virgo",
			lib: "libra",
			scor: "scorpio",
			sag: "sagittarius",
		};

		if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
			return zodiacSigns.cap;
		} else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
			return zodiacSigns.aqua;
		} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
			return zodiacSigns.pis;
		} else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
			return zodiacSigns.ari;
		} else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
			return zodiacSigns.taur;
		} else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
			return zodiacSigns.gem;
		} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
			return zodiacSigns.can;
		} else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
			return zodiacSigns.leo;
		} else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
			return zodiacSigns.vir;
		} else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
			return zodiacSigns.lib;
		} else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
			return zodiacSigns.scor;
		} else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
			return zodiacSigns.sag;
		}
	}

	function getPic(sign) {
		var sign = sign.charAt(0).toUpperCase() + sign.slice(1);

		// Showing image to html  according to zodiac sign.
		$("#imageHoroscope").attr("src", `./assets/Signs/${sign}.jpg`);
	}
});
