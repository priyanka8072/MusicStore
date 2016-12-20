$(function() {
	$('#Esubmit')
			.click(
					function(f) {						
						
						 f.preventDefault();
						
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
						
						var newurl = "http://localhost:8080/MusicStore/music/AccessRecords/saveEmp";

						$.ajax({
							type : "POST",
							contentType : "application/json",
							url : newurl,
							data : JSON.stringify(emp),
							dataType : 'json',
							success : function(data) {
								$('#tempH1').addClass('hide');
								$('.tempH2').removeClass('hide');
								$('.alert-success').append("<strong>Success!</strong> Details of employee <strong>"+emp["firstName"]+"</strong> with ID :" +data["id"]+ " created successfully. " +
										"<a href='empadd.html' target='_self'> Click </a> to create new employee.");
								$('.tempCont').addClass('hide');
							},
							error : function(e) {
								console.log("Error: ", e);
							}
						});
					});
	
	$('#closed').click(function(e) {	
		e.preventDefault();
		location.reload();

	});

})