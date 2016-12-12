$(function() {
	$("#empform").keyup(function(e) {
		if (e.which == 13) {
			$('#Esubmit').trigger('click');
		}
	});

	$('#Esubmit')
			.click(
					function() {
						/*
						 * var showData = $('#searchresult');
						 * 
						 * var input=$('#form-data').val();
						 */

						var fdata = {
							'firstName' : document.getElementById('firstN').value,
							'lastName' : document.getElementById('lastN').value,
							'birthdate' : document.getElementById('birthD').value,
							'hireDate' : document.getElementById('hireD').value,
							'title' : document.getElementById('Etitle').value,
							'reportsTo' : document.getElementById('staffID').value,
							'address' : document.getElementById('eadd').value,
							'city' : document.getElementById('ecity').value,
							'state' : document.getElementById('estate').value,
							'country' : document.getElementById('ecountry').value,
							'postalCode' : document.getElementById('ecode').value,
							'phone' : document.getElementById('ephone').value,
							'email' : document.getElementById('eemail').value,
							'fax' : document.getElementById('efax').value
						};
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

						/*
						 * if(fdata["Address"]){ alert(fdata["FirstName"]) }
						 * else alert('no data')
						 */
						/*
						 * var showData = $('#testresult');
						 * showData.append(fdata["FirstName"])
						 */
						var newurl = "http://localhost:8080/MusicStore/music/AccessRecords/saveEmp";

						$.ajax({
							type : "POST",
							contentType : "application/json",
							url : newurl,
							/* data: $("#form").serialize(), */
							data : JSON.stringify(emp),
							dataType : 'json',
							success : function(data) {
								alert('empID generated is:', data);
							},
							error : function(e) {
								console.log("Error: ", e);
								display(e);
							}
						});
					});

})