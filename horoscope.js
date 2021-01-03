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
var date



// Frankies Api with Plan just in Case

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://astrology-horoscope.p.rapidapi.com/zodiac_finder/result/",
    "method": "POST",
    "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "x-rapidapi-key": "64fc9c6553msha1f5a8a6cbed132p105638jsn37d9c0c703f2",
        "x-rapidapi-host": "astrology-horoscope.p.rapidapi.com"
    },

};

$("#submitDate").on("click", function (e) {
    e.preventDefault();

    console.log("click")

    //add message saying follow format of date DATE (YYYY-MM-DD)
    date = $("#date").val();

    console.log(date)

    getHoroscope(date);




});

function getHoroscope(date) {
    $.ajax(settings).done(function (response) {
        console.log(response);











    });
}
