//Celtic Cross Spread//

$(document).ready(function () {

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
		});

	// Listen for repeat clicks on image IDs to trigger card data functions
	$('#card1').click(function (e) { 
		e.preventDefault();
		writeCard1();
	});

	$('#card2').click(function (e) {
		e.preventDefault();
		writeCard2();
	});

	$('#card3').click(function (e) {
		e.preventDefault();
		writeCard3();
	});

	$('#card4').click(function (e) {
		e.preventDefault();
		writeCard4();
	});

	$('#card5').click(function (e) {
		e.preventDefault();
		writeCard5();
	});

	$('#card6').click(function (e) {
		e.preventDefault();
		writeCard6();
	});

	$('#card7').click(function (e) {
		e.preventDefault();
		writeCard7();
	});

	$('#card8').click(function (e) {
		e.preventDefault();
		writeCard8();
	});

	$('#card9').click(function (e) {
		e.preventDefault();
		writeCard9();
	});

	$('#card10').click(function (e) {
		e.preventDefault();
		writeCard10();
	});

	// Redisplay card data when user clicks card image after card reveal
	function writeCard1(data) {
		var card1 = localStorage.getItem('card1');
		var meaning1 = localStorage.getItem('meaning1');
		$(".celticTitle").text("Card 1: " + card1);
		$(".celticPos").text("The Situation");
		$('.celticRead').text('Meaning: ' + meaning1);
	};

	function writeCard2(data) {
		var card2 = localStorage.getItem('card2');
		var meaning2 = localStorage.getItem('meaning2');
		$(".celticTitle").text("Card 2: " + card2);
		$(".celticPos").text("The Challenge");
		$('.celticRead').text('Meaning: ' + meaning2);
	};

	function writeCard3(data) {
		var card3 = localStorage.getItem('card3');
		var meaning3 = localStorage.getItem('meaning3');
		$(".celticTitle").text("Card 3: " + card3);
		$(".celticPos").text("The Root");
		$('.celticRead').text('Meaning: ' + meaning3);
	};

	function writeCard4(data) {
		var card4 = localStorage.getItem('card4');
		var meaning4 = localStorage.getItem('meaning4');
		$(".celticTitle").text("Card 4: " + card4);
		$(".celticPos").text("The Past");
		$('.celticRead').text('Meaning: ' + meaning4);
	};

	function writeCard5(data) {
		var card5 = localStorage.getItem('card5');
		var meaning5 = localStorage.getItem('meaning5');
		$(".celticTitle").text("Card 5: " + card5);
		$(".celticPos").text("The Possibilities");
		$('.celticRead').text('Meaning: ' + meaning5);
	};

	function writeCard6(data) {
		var card6 = localStorage.getItem('card6');
		var meaning6 = localStorage.getItem('meaning6');
		$(".celticTitle").text("Card 6: " + card6);
		$(".celticPos").text("The Near Future");
		$('.celticRead').text('Meaning: ' + meaning6);
	};

	function writeCard7(data) {
		var card7 = localStorage.getItem('card7');
		var meaning7 = localStorage.getItem('meaning7');
		$(".celticTitle").text("Card 7: " + card7);
		$(".celticPos").text("The Approach");
		$('.celticRead').text('Meaning: ' + meaning7);
	};

	function writeCard8(data) {
		var card8 = localStorage.getItem('card8');
		var meaning8 = localStorage.getItem('meaning8');
		$(".celticTitle").text("Card 8: " + card8);
		$(".celticPos").text("The Others");
		$('.celticRead').text('Meaning: ' + meaning8);
	};

	function writeCard9(data) {
		var card9 = localStorage.getItem('card9');
		var meaning9 = localStorage.getItem('meaning9');
		$(".celticTitle").text("Card 9: " + card9);
		$(".celticPos").text("The Attitude");
		$('.celticRead').text('Meaning: ' + meaning9);
	};

	function writeCard10(data) {
		var card10 = localStorage.getItem('card10');
		var meaning10 = localStorage.getItem('meaning10');
		$(".celticTitle").text("Card 10: " + card10);
		$(".celticPos").text("The Outcome");
		$('.celticRead').text('Meaning: ' + meaning10);
	};

	var cardData;
	showCards(cardData);
	function showCards(data) {

        // Call First Card
		$("#card1").one("click", function (e) {
			// Reset card flip class
			if ($("#card1").hasClass("flip")) {
				$("#card1").removeClass("flip");
			}
			$("#card1").attr("class", "activator");
			// Randomly generate a card
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			$(".celticTitle").text("Card 1: " + cardData.cards[randomCard].name);
			// Define card placement in Celtic Cross
            $(".celticPos").text('The Situation');
			cardImage = cardData.cards[randomCard].name_short;
			// Swap image sources
			$("#card1").attr("src", "./assets/card-images/" + cardImage + ".png");
			// Randomly determine if card is flipped or not
			var flip1 = Math.random() < 0.5;
			if (flip1 === true) {
				$("#card1").addClass("flip");
			}
			if ($("#card1").hasClass("flip")) {
				//If/Else showing which info to call(rev vs up)
				$(".celticRead").text(
                    "Meaning: " + cardData.cards[randomCard].meaning_rev
				);
				// Set card meaning to local storage to be recalled when user clicks on card image again
				localStorage.setItem('meaning1', cardData.cards[randomCard].meaning_rev);
                
			} else {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_up
				);
				// Set card meaning to local storage to be recalled when user clicks on card image again
				localStorage.setItem('meaning1', cardData.cards[randomCard].meaning_up);
			}
			// Set card name to local storage to be recalled when user clicks on card image again
			localStorage.setItem('card1', cardData.cards[randomCard].name);
			// Remove card object from API array to prevent card duplication in one spread
			cardData.cards.splice(randomCard, 1);
		});

		// Call Second Card
		$("#card2").one("click", function () {
			if ($("#card2").hasClass("flip")) {
				$("#card2").removeClass("flip");
			}
			$("#card2").attr("class", "activator");
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			$(".celticTitle").text("Card 2: "+ cardData.cards[randomCard].name)
            $(".celticPos").text('The Challenge')
			cardImage = cardData.cards[randomCard].name_short;
			$("#card2").attr("src", "./assets/card-images/" + cardImage + ".png");
			var flip2 = Math.random() < 0.5;
			if (flip2 === true) {
				$("#card2").addClass("flip");
			}

			//If/Else showing which info to call(rev vs up)			
			if ($("#card2").hasClass("flip")) {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_rev
				);
				localStorage.setItem('meaning2', cardData.cards[randomCard].meaning_rev);
			} else {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_up
				);
				localStorage.setItem('meaning2', cardData.cards[randomCard].meaning_up);
			}
			localStorage.setItem('card2', cardData.cards[randomCard].name);
			cardData.cards.splice(randomCard, 1);
		});

		// Call Third Card
		$("#card3").one("click", function () {
			if ($("#card3").hasClass("flip")) {
				$("#card3").removeClass("flip");
			}
			$("#card3").attr("class", "activator");
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			$(".celticTitle").text("Card 3: "+ cardData.cards[randomCard].name)
            $(".celticPos").text('The Root')
			cardImage = cardData.cards[randomCard].name_short;
			$("#card3").attr("src", "./assets/card-images/" + cardImage + ".png");
			var flip3 = Math.random() < 0.5;
			if (flip3 === true) {
				$("#card3").addClass("flip");
			}

			//If/Else showing which info to call(rev vs up)
			if ($("#card3").hasClass("flip")) {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_rev
				);
				localStorage.setItem('meaning3', cardData.cards[randomCard].meaning_rev);
			} else {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_up
				);
				localStorage.setItem('meaning3', cardData.cards[randomCard].meaning_up);
			};
			localStorage.setItem('card3', cardData.cards[randomCard].name);
			cardData.cards.splice(randomCard, 1);
		});

		// Call Fourth Card
		$("#card4").one("click", function () {
			if ($("#card4").hasClass("flip")) {
				$("#card4").removeClass("flip");
			}
			$("#card4").attr("class", "activator");
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			$(".celticTitle").text("Card 4: "+ cardData.cards[randomCard].name)
            $(".celticPos").text('The Past')
			cardImage = cardData.cards[randomCard].name_short;
			$("#card4").attr("src", "./assets/card-images/" + cardImage + ".png");
			var flip4 = Math.random() < 0.5;
			if (flip4 === true) {
				$("#card4").addClass("flip");
			}

			//If/Else showing which info to call(rev vs up)
			if ($("#card4").hasClass("flip")) {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_rev
				);
				localStorage.setItem('meaning4', cardData.cards[randomCard].meaning_rev);
			} else {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_up
				);
				localStorage.setItem('meaning4', cardData.cards[randomCard].meaning_up);
			}
			localStorage.setItem('card4', cardData.cards[randomCard].name);
			cardData.cards.splice(randomCard, 1);
		});

		// Call Fifth Card
		$("#card5").one("click", function () {
			if ($("#card5").hasClass("flip")) {
				$("#card5").removeClass("flip");
			}
			$("#card5").attr("class", "activator");
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			$(".celticTitle").text("Card 5: "+ cardData.cards[randomCard].name)
            $(".celticPos").text('The Possibilities')
			cardImage = cardData.cards[randomCard].name_short;
			$("#card5").attr("src", "./assets/card-images/" + cardImage + ".png");
			var flip5 = Math.random() < 0.5;
			if (flip5 === true) {
				$("#card5").addClass("flip");
			}

			//If/Else showing which info to call(rev vs up)
			if ($("#card5").hasClass("flip")) {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_rev
				);
				localStorage.setItem('meaning5', cardData.cards[randomCard].meaning_rev);
			} else {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_up
				);
				localStorage.setItem('meaning5', cardData.cards[randomCard].meaning_up);
			};
			localStorage.setItem('card5', cardData.cards[randomCard].name);
			cardData.cards.splice(randomCard, 1);
		});

		// Call Sixth Card
		$("#card6").one("click", function () {
			if ($("#card6").hasClass("flip")) {
				$("#card6").removeClass("flip");
			}
			$("#card6").attr("class", "activator");
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			$(".celticTitle").text("Card 6: "+ cardData.cards[randomCard].name)
            $(".celticPos").text('The Near Future')
			cardImage = cardData.cards[randomCard].name_short;
			$("#card6").attr("src", "./assets/card-images/" + cardImage + ".png");
			var flip6 = Math.random() < 0.5;
			if (flip6 === true) {
				$("#card6").addClass("flip");
			}

			//If/Else showing which info to call(rev vs up)
			if ($("#card6").hasClass("flip")) {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_rev
				);
				localStorage.setItem('meaning6', cardData.cards[randomCard].meaning_rev);
			} else {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_up
				);
				localStorage.setItem('meaning6', cardData.cards[randomCard].meaning_up);
			}
			localStorage.setItem('card6', cardData.cards[randomCard].name);
			cardData.cards.splice(randomCard, 1);
		});

		// Call  7th Card
		$("#card7").one("click", function () {
			if ($("#card7").hasClass("flip")) {
				$("#card7").removeClass("flip");
			}
			$("#card7").attr("class", "activator");
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			$(".celticTitle").text("Card 7: "+ cardData.cards[randomCard].name)
            $(".celticPos").text('The Approach')
			cardImage = cardData.cards[randomCard].name_short;
			$("#card7").attr("src", "./assets/card-images/" + cardImage + ".png");
			var flip7 = Math.random() < 0.5;
			if (flip7 === true) {
				$("#card7").addClass("flip");
			}

			//If/Else showing which info to call(rev vs up)
			if ($("#card7").hasClass("flip")) {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_rev
				);
				localStorage.setItem('meaning7', cardData.cards[randomCard].meaning_rev);
			} else {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_up
				);
				localStorage.setItem('meaning7', cardData.cards[randomCard].meaning_up);
			};
			localStorage.setItem('card7', cardData.cards[randomCard].name);
			cardData.cards.splice(randomCard, 1);
		});

		// Call Eighth Card
		$("#card8").one("click", function () {
			if ($("#card8").hasClass("flip")) {
				$("#card8").removeClass("flip");
			}
			$("#card8").attr("class", "activator");
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			$(".celticTitle").text("Card 8: "+ cardData.cards[randomCard].name)
            $(".celticPos").text('The Others')
			cardImage = cardData.cards[randomCard].name_short;
			$("#card8").attr("src", "./assets/card-images/" + cardImage + ".png");
			var flip8 = Math.random() < 0.5;
			if (flip8 === true) {
				$("#card8").addClass("flip");
			}

			//If/Else showing which info to call(rev vs up)
			if ($("#card8").hasClass("flip")) {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_rev
				);
				localStorage.setItem('meaning8', cardData.cards[randomCard].meaning_rev);
			} else {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_up
				);
				localStorage.setItem('meaning8', cardData.cards[randomCard].meaning_up);
			};
			localStorage.setItem('card8', cardData.cards[randomCard].name);
			cardData.cards.splice(randomCard, 1);
		});

		// Call Ninth Card
		$("#card9").one("click", function () {
			if ($("#card9").hasClass("flip")) {
				$("#card9").removeClass("flip");
			}
			$("#card9").attr("class", "activator");
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			$(".celticTitle").text("Card 9: "+ cardData.cards[randomCard].name)
            $(".celticPos").text('The Attitude')
			cardImage = cardData.cards[randomCard].name_short;
			$("#card9").attr("src", "./assets/card-images/" + cardImage + ".png");
			var flip9 = Math.random() < 0.5;
			if (flip9 === true) {
				$("#card9").addClass("flip");
			}

			//If/Else showing which info to call(rev vs up)
			if ($("#card9").hasClass("flip")) {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_rev
				);
				localStorage.setItem('meaning9', cardData.cards[randomCard].meaning_rev);
			} else {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_up
				);
				localStorage.setItem('meaning9', cardData.cards[randomCard].meaning_up);
			};
			localStorage.setItem('card9', cardData.cards[randomCard].name);
			cardData.cards.splice(randomCard, 1);
		});

		// Call Tenth Card
        $("#card10").one("click", function () 
        {
			if ($("#card10").hasClass("flip")) {
				$("#card10").removeClass("flip");
			}
			$("#card10").attr("class", "activator");
			var randomCard = Math.floor(Math.random() * cardData.cards.length);
			$(".celticTitle").text("Card 10: "+ cardData.cards[randomCard].name)
            $(".celticPos").text('The Outcome')
			cardImage = cardData.cards[randomCard].name_short;
			$("#card10").attr("src", "./assets/card-images/" + cardImage + ".png");
			var flip10 = Math.random() < 0.5;
			if (flip10 === true) {
				$("#card10").addClass("flip");
			}

			//If/Else showing which info to call(rev vs up)
			if ($("#card10").hasClass("flip")) {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_rev
				);
				localStorage.setItem('meaning10', cardData.cards[randomCard].meaning_rev);
			} else {
				$(".celticRead").text(
					"Meaning: " + cardData.cards[randomCard].meaning_up
				);
				localStorage.setItem('meaning10', cardData.cards[randomCard].meaning_up);
            };
			localStorage.setItem('card10', cardData.cards[randomCard].name);
			cardData.cards.splice(randomCard, 1);
		});
    };
});
