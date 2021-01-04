$(document).ready(function () {
	$("#submitDate").on("click", function (e) {
		e.preventDefault();
		// Pulling the value for the month and day when clicked
		var day = $("#day").val();
		var month = $("#month").val();

		// Calling the function and grabbing the day and month
		var sign = getZodiacSign(day, month);
		// Making sure the user inputs a valid input for both month and day
		if (
			typeof day === NaN ||
			day === "" ||
			typeof month === NaN ||
			month === ""
		) {
			alert("Please input both your birth month and birth day.");
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
				console.log(response);

				//Inputing the api call and zodiac sign to html

				document.querySelector(".main").innerHTML = `
        
        <p><strong>Sign:</strong> ${
					sign.charAt(0).toUpperCase() + sign.slice(1)
				}</p>
	    <p><strong>Todays Reading:</strong> ${response.description}</p>
	    <p><strong>Compatibility: </strong> ${response.compatibility}</p>
	    <p><strong>Lucky Number: </strong>${response.lucky_number}</p>
        <p><strong>Lucky Time: </strong>${response.lucky_time}</p>`;

				// Setting Local Storage
				localStorage.setItem("Zodiac Sign", sign);
			});
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
});
