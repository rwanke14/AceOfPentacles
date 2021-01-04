// const settings = {
//     "async": true,
//     "crossDomain": true,
//     // "url": "https://astrology-horoscope.p.rapidapi.com/zodiac_finder/details_requirements/",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": "87b6f48f43mshd9aaace1d8eeaefp1a1912jsn1259fae457e2",
//         "x-rapidapi-host": "astrology-horoscope.p.rapidapi.com"
//     }
// };

//Global variables
var date;

// Frankies Api with Plan just in Case

// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: "https://astrology-horoscope.p.rapidapi.com/zodiac_finder/result/",
// 	method: "POST",
// 	headers: {
// 		"content-type": "application/x-www-form-urlencoded",
// 		"x-rapidapi-key": "64fc9c6553msha1f5a8a6cbed132p105638jsn37d9c0c703f2",
// 		"x-rapidapi-host": "astrology-horoscope.p.rapidapi.com",
// 	},
// };

// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url:
// 		"https://astrology-horoscope.p.rapidapi.com/zodiac_finder/details_requirements/",
// 	method: "GET",
// 	headers: {
// 		"x-rapidapi-key": "64fc9c6553msha1f5a8a6cbed132p105638jsn37d9c0c703f2",
// 		"x-rapidapi-host": "astrology-horoscope.p.rapidapi.com",
// 	},
// };

// if ($("#date").val() === "1992-07-20") {
// 	var sign = "cancer";
// }

// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=cancer&day=today`,
// 	method: "POST",
// 	headers: {
// 		"x-rapidapi-key": "64fc9c6553msha1f5a8a6cbed132p105638jsn37d9c0c703f2",
// 		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
// 	},
// };
// $.ajax(settings).done(function (response) {
// 	console.log(response);
// 	$("#submitDate").on("click", function (e) {
// 		e.preventDefault();
// 		console.log(response.date_range);
// 		var inputVal = document.getElementById("date").value;
// 		console.log(inputVal);
// 		document.querySelector(".main").innerHTML = response.description;
// 	});
// });

// $.ajax(settings).done(function (response) {
// 	console.log(response.data);
// });

// $("#submitDate").on("click", function (e) {
// 	e.preventDefault();
// function getHoroscope(date) {
// 	$.ajax(settings).done(function (response) {
// 		console.log(response);
// 		console.log(response.id);
// 	});
// }

// //add message saying follow format of date DATE (YYYY-MM-DD)
// date = $("#date").val();

// console.log(date);

// getHoroscope(date);
// });

// $.ajax({
// 	async: true,
// 	crossDomain: true,
// 	url:
// 		"https://astrology-horoscope.p.rapidapi.com/zodiac_finder/details_requirements/",
// 	method: "GET",
// 	headers: {
// 		"x-rapidapi-key": "64fc9c6553msha1f5a8a6cbed132p105638jsn37d9c0c703f2",
// 		"x-rapidapi-host": "astrology-horoscope.p.rapidapi.com",
// 	},
// 	data: {
// 		mystic_dob: "1988-05-11",
// 	},
// 	success: function (response) {
// 		console.log(response);
// 	},
// });

$("#submitDate").on("click", function (e) {
	e.preventDefault();
	// Pulling the value for the month and day when clicked
	var day = $("#day").val();
	var month = $("#month").val();

	// Calling the function and grabbing the day and month
	var sign = getZodiacSign(day, month);

	const settings = {
		async: true,
		crossDomain: true,
		url: `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=today`,
		method: "POST",
		headers: {
			"x-rapidapi-key": "64fc9c6553msha1f5a8a6cbed132p105638jsn37d9c0c703f2",
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
		Козерог: "capricorn",
		Водолей: "aquarius",
		Рыбы: "pisces",
		Овен: "aries",
		Телец: "taurus",
		Близнецы: "gemini",
		Рак: "cancer",
		Лев: "leo",
		Девы: "virgo",
		Весы: "libra",
		Скорпион: "scorpio",
		Стрелец: "sagittarius",
	};

	if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
		return zodiacSigns.Козерог;
	} else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
		return zodiacSigns.Водолей;
	} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
		return zodiacSigns.Рыбы;
	} else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
		return zodiacSigns.Овен;
	} else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
		return zodiacSigns.Телец;
	} else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
		return zodiacSigns.Близнецы;
	} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
		return zodiacSigns.Рак;
	} else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
		return zodiacSigns.Лев;
	} else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
		return zodiacSigns.Девы;
	} else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
		return zodiacSigns.Весы;
	} else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
		return zodiacSigns.Скорпион;
	} else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
		return zodiacSigns.Стрелец;
	}
}
