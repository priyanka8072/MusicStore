$(function() {
	$('#Esubmit')
			.click(
					function() {

						var emp = {}
						emp["firstName"] = $("#firstN").val();
						emp["lastName"] = $("#lastN").val();
						emp["birthday"] = $("#birthD").val();
						emp["title"] = $("#Etitle").val();
						emp["hireDate"] = $("#hireD").val();
						emp["reportsTo"] = $("#staffID").val();
						emp["address"] = $("#eadd").val();
						emp["city"] = $("#ecity").val();
						emp["state"] = $("#estate").val();
						emp["country"] = $("#ecountry").val();
						emp["postalCode"] = $("#ecode").val();
						emp["phone"] = $("#ephone").val();
						emp["email"] = $("#eemail").val();
						emp["fax"] = $("#efax").val();
						
						var showData = $('#showemp');
						var newurl = "http://localhost:8080/MusicStore/music/AccessRecords/saveEmp";

						$.ajax({
							type : "POST",
							contentType : "application/json",
							url : newurl,
							data : JSON.stringify(emp),
							dataType : 'json',
							success : function(data) {
								showData.empty();
								showData.append($('<p/>').html(data[firstName]));
							},
							error : function(e) {
								console.log("Error: ", e);
								display(e);
							}
						});
					});

})