$(document).ready(function () {
	// Carousel time switch variables
	const elems = document.querySelector(".carousel");
	const duration = 6000; //milliseconds

	// Initiate carousel transition
	M.Carousel.init(elems);

	//Buttons LEFT and RIGHT// YJK
	$(".moveNextCarousel").click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".carousel").carousel("next");
	});
	$(".movePrevCarousel").click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".carousel").carousel("prev");
	});

	const settings = {
		async: true,
		crossDomain: true,
		// "url": "https://astrology-horoscope.p.rapidapi.com/zodiac_finder/details_requirements/",
		method: "GET",
		headers: {
			"x-rapidapi-key": "87b6f48f43mshd9aaace1d8eeaefp1a1912jsn1259fae457e2",
			"x-rapidapi-host": "astrology-horoscope.p.rapidapi.com",
		},
	};

	$.getJSON(
		"https://rws-cards-api.herokuapp.com/api/v1/cards",
		function (data) {
			console.log(data);
			console.log(data.cards[20].name);
			cardData = data;
			cardData.cards[41].meaning_rev =
				"A relationship becomes less significant than originally expected." +
				" Friends rather than lovers. Old issues may block new love. With the Hermit, High Priestess, or" +
				" other reversed cards, a need to be on your own. --Rachel Pollack, The New Tarot Handbook";
		}
	);

	var cardData;

	function showCards(data) {
		$("#0").one("click", function () {
			if ($("#0").hasClass("flip")) {
				$("#0").removeClass("flip");
			}
			$("#title0").attr("class", "activator");
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			console.log(
				cardData.cards[randomCard].name +
					" " +
					cardData.cards[randomCard].name_short
			);
			cardImage = cardData.cards[randomCard].name_short;
			$("#0").attr("src", "./assets/card-images/" + cardImage + ".png");
			var flip1 = Math.random() < 0.5;
			if (flip1 === true) {
				$("#0").addClass("flip");
			}

			$("#title0").text(cardData.cards[randomCard].name);
			if ($("#0").hasClass("flip")) {
				$("#reveal0").text(
					"Meaning: " + cardData.cards[randomCard].meaning_rev
				);
			} else {
				$("#reveal0").text("Meaning: " + cardData.cards[randomCard].meaning_up);
			}

			// Remove selected card from array to prevent duplicate card pulls
			cardData.cards.splice(randomCard, 1);
		});

		$("#1").one("click", function () {
			if ($("#1").hasClass("flip")) {
				$("#1").removeClass("flip");
			}
			$("#title1").attr("class", "activator");
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			console.log(
				cardData.cards[randomCard].name +
					" " +
					cardData.cards[randomCard].name_short
			);
			cardImage = cardData.cards[randomCard].name_short;
			$("#1").attr("src", "./assets/card-images/" + cardImage + ".png");
			var flip2 = Math.random() < 0.5;
			if (flip2 === true) {
				$("#1").addClass("flip");
			}

			$("#title1").text(cardData.cards[randomCard].name);
			if ($("#1").hasClass("flip")) {
				$("#reveal1").text(
					"Meaning: " + cardData.cards[randomCard].meaning_rev
				);
			} else {
				$("#reveal1").text("Meaning: " + cardData.cards[randomCard].meaning_up);
			}

			// Remove selected card from array to prevent duplicate card pulls
			cardData.cards.splice(randomCard, 1);
		});

		$("#2").one("click", function () {
			if ($("#2").hasClass("flip")) {
				$("#2").removeClass("flip");
			}
			$("#title2").attr("class", "activator");
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			console.log(
				cardData.cards[randomCard].name +
					" " +
					cardData.cards[randomCard].name_short
			);
			cardImage = cardData.cards[randomCard].name_short;
			$("#2").attr("src", "./assets/card-images/" + cardImage + ".png");
			var flip3 = Math.random() < 0.5;
			if (flip3 === true) {
				$("#2").addClass("flip");
			}

			$("#title2").text(cardData.cards[randomCard].name);
			if ($("#2").hasClass("flip")) {
				$("#reveal2").text(
					"Meaning: " + cardData.cards[randomCard].meaning_rev
				);
			} else {
				$("#reveal2").text("Meaning: " + cardData.cards[randomCard].meaning_up);
			}

			// Remove selected card from array to prevent duplicate card pulls
			cardData.cards.splice(randomCard, 1);
		});
	}

	$(".ppfBtn").click(function (e) {
		e.preventDefault();
		$(".carousel").remove();
		$(".ppfCards").attr("style", "visibility: visible");
		$('#detailsCard').attr('style', 'visibility: visible');
		showCards();
	});

	$(".welcomeSlide").text("Welcome to the Tarot");
	$(".welcomeText").text("INSERT TAROT EXPLANATION HERE");

	$(".ppfTitle").text("Past - Present - Future Spread");
	$(".btn").text("See my spread");

});
