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

	// Call tarot card API 
	$.getJSON(
		"https://rws-cards-api.herokuapp.com/api/v1/cards",
		function (data) {
			console.log(data);
			cardData = data;
			// Correct API -- add missing card meaning 
			cardData.cards[41].meaning_rev =
				"A relationship becomes less significant than originally expected." +
				" Friends rather than lovers. Old issues may block new love. With the Hermit, High Priestess, or" +
				" other reversed cards, a need to be on your own. --Rachel Pollack, The New Tarot Handbook";
		}
	);

	// Declare cardData variable globally
	var cardData;

	// Primary three card spread function
	function showCards(data) {
		// Card 0 listener
		$("#0").one("click", function () {
			// Reset card flip class
			if ($("#0").hasClass("flip")) {
				$("#0").removeClass("flip");
			};
			// Add Materialize activator attribute for card reveals
			$("#title0").attr("class", "activator");
			// Generate a random card
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
		
			cardImage = cardData.cards[randomCard].name_short;
			// Associate random card with its appropriate card image, modify card image source
			$("#0").attr("src", "./assets/card-images/" + cardImage + ".png");
			// Randomly determine if card is rightside up or upside down, changes tarot meaning
			var flip1 = Math.random() < 0.5;
			// Add flip class from CSS if true
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
			};
			cardData.cards.splice(randomCard, 1);
		});

		$("#2").one("click", function () {
			if ($("#2").hasClass("flip")) {
				$("#2").removeClass("flip");
			}
			$("#title2").attr("class", "activator");
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			cardImage = cardData.cards[randomCard].name_short;
			$("#2").attr("src", "./assets/card-images/" + cardImage + ".png");
			var flip3 = Math.random() < 0.5;
			if (flip3 === true) {
				$("#2").addClass("flip");
			};

			$("#title2").text(cardData.cards[randomCard].name);
			if ($("#2").hasClass("flip")) {
				$("#reveal2").text(
					"Meaning: " + cardData.cards[randomCard].meaning_rev
				);
			} else {
				$("#reveal2").text("Meaning: " + cardData.cards[randomCard].meaning_up);
			};
			cardData.cards.splice(randomCard, 1);
		});
	}

	// Initiate Past Present Future spread. Remove carousel and rewrite page
	$(".ppfBtn").click(function (e) {
		e.preventDefault();
		$(".carousel").remove();
		$(".ppfCards").attr("style", "visibility: visible");
		$('#detailsCard').attr('style', 'visibility: visible');
		showCards();
	});

});
