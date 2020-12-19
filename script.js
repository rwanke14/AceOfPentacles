console.log('Hello world');

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

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




/*

First Page: 

	Header - 
	Navbar setting up title of page.
		- include small menu to connect the three pages we will have in case they want to move between
		- do we have an about page explaining our team and the page
	

	Body - have carousel and three slides explaining the process or what they get. Each slide has a button that lets you go to the next page to select deck.

	Footer - larger than navbar and lists out all the pages for links and you can add fake legal. You could put social media for fun but not have them lead anywhere?

Second Page

	Nav and footer are the same.
	Change center container to as many sections we need to hold the various decks
		-drop down menu to select and select layout?
		-Tarot shuffle button on this page to move to next page?

Third Page

	Nav and footer the same.
	Show the shuffle of cards.
	then layout the reading along with the layout the chose. 
	section explaining the reading
	section explaining each card and their meaning?
	section leading you back to the main page and starting over?

Fourth Page 
	horoscope page?
	horoscope of the day - select yours and pop up your horoscope. 
*/






$.getJSON('https://rws-cards-api.herokuapp.com/api/v1/cards', function(data) {
    // JSON result in `data` variable
    console.log(data);
});
