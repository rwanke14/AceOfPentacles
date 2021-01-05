//Contact Page Jquery


$(document).ready(function () {

	$("#submit").click(function () {
		var name = $("#name").val();
		var email = $("#email").val();
		var messageEl = $("#message").val();
		


		$("#returnmessage").empty(); // To empty previous error/success message.

		// Checking for blank fields.

		if (name == '' || email == '' || contact == '') {
			// alert("Please Fill Required Fields");
		} else {

			Email.send({
				Host: "smtp.elasticemail.com",
				Username: "contact.aceofpentacles@gmail.com",
				Password: "DFC9CE1CA2B98A50359002F4A6E5E1FABC09",
				To: "contact.aceofpentacles@gmail.com",
				Subject: "AceEmail",
				From: email,
				Body: messageEl
			})
			// .then(
			// 	message => alert(message)
			// );




		}
	});
})