$(function() {

	$('#adminSubmit').click(function() {
		var input = $('#inputEmail').val();
		if (!input && !$('#inputPassword').val()) {
			alert("Please enter a valid username and password!")
		} else if (input === "admin@blah.com") {
			window.open("empadd.html");
			window.open('', '_self').close();
		} else {
			window.open("invoice.html");
			window.open('', '_self').close();
		}
	});

});
