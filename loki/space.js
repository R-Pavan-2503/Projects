$(document).ready(function() {
	$("#signup-form").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 6
			}
		},
		messages: {
			name: "Please enter your name",
			email: "Please enter a valid email address",
			password: {
				required: "Please enter a password",
				minlength: "Your password must be at least 6 characters long"
			}
		}
	});

	$("#signup-button").click(function() {
		alert("Thank you for signing up!");
	});
});