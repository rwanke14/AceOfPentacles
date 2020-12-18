console.log('Hello world');

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://astrology-horoscope.p.rapidapi.com/zodiac_finder/details_requirements/",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "87b6f48f43mshd9aaace1d8eeaefp1a1912jsn1259fae457e2",
		"x-rapidapi-host": "astrology-horoscope.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});


$.getJSON('https://rws-cards-api.herokuapp.com/api/v1/cards', function(data) {
    // JSON result in `data` variable
});