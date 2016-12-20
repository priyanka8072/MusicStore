$(function() {
	  
	  $('#Csubmit').click(function(e) {
		  
		  e.preventDefault();
		  
		  var emp = {}
			emp["firstName"] = $("#firstN").val();
			emp["lastName"] = $("#lastN").val();
			emp["address"] = $("#Cadd").val();
			emp["city"] = $("#Ccity").val();
			emp["state"] = $("#Cstate").val();
			emp["country"] = $("#Ccountry").val();
			emp["postalCode"] = $("#Ccode").val();
			emp["company"] = $("#Ccompany").val();
			emp["phone"] = $("#Cphone").val();
			emp["email"] = $("#Cemail").val();
			emp["fax"] = $("#Cfax").val();
			emp["supportRepID"] = $("#empId").val();

			if(emp["supportRepID"] && emp["firstName"] && emp["lastName"]){
			var newurl = "http://localhost:8080/MusicStore/music/AccessRecords/saveCust";
			$.ajax({
				type : "POST",
				contentType : "application/json",
				url : newurl,
				data : JSON.stringify(emp),
				dataType : 'json',
				success : function(data) {
					$('.head4').removeClass('hide');
					$('.alert-success').append("<strong>Success!</strong> Details of customer "+emp["firstName"]+" with ID:" +data["id"]+ " created successfully. " +
							"<a href='customeradd.html' target='_self'> Click </a> to create or update the customer");
					$('.bodyCont').addClass('hide');
				},
				error : function(e) {
					console.log("Error: ", e);
				}
			});
			}else{alert("Please fill the mandatory data!");}
		});
	  

	  
	  $('#Ccreate').click(function(e) {  
		  e.preventDefault();
		  $('.head1').addClass('hide');
		  $('.head2').removeClass('hide');
		  $('#Csubmit').removeClass('hide');
		  $('.bodyCont').removeClass('hide');
	  
	  });
	  
	  $('#Cupdate').click(function(e) {		  
		  e.preventDefault();
		  $('.head1').addClass('hide');
		  $('.head3').removeClass('hide');
		  $('.cust').removeClass('hide');
		  $('#Cupd').removeClass('hide');
		  $('.bodyCont').removeClass('hide');
	  
	  });
	  
	  $('#custID').keyup(function() {
			
			var custID = $('#custID').val();
			var url = "http://localhost:8080/MusicStore/music/AccessRecords/validateCustomer/" + custID;
			if(custID){
				  $.ajax({
					type: "GET",
					contenType:"application/json",
					url: url,
					dataType: 'json',
						success : function(data){
							console.log(data);
							if(!data["firstName"]){
								 
								$('.alert-danger').removeClass('hide');
								$('.alert-danger').append("<strong>Alert!</strong><a href='customeradd.html' target='_self'> Customer</a> "+ custID +" does not exist. Click on customer to create new"
										);
								$('#custID').val(null);

							}else{
								$('#firstN').val(data['firstName']);
								$('#lastN').val(data['lastName']);
								$('#Cadd').val(data['address']);
								$('#Ccity').val(data['city']);
								$('#Cstate').val(data['state']);
								$('#Ccountry').val(data['country']);
								$('#Ccode').val(data['postalCode']);
								$('#Ccompany').val(data['company']);
								$('#Cphone').val(data['phone']);
								$('#Cemail').val(data['email']);
								$('#Cfax').val(data['fax']);
								$('#empId').val(data['supportRepID'])

							}
								
						}
				  });
				  };
			
		});
	  
 $('#Cupd').click(function(h) {
		  
		  h.preventDefault();
		  
		  var emp = {}
			emp["custID"] = $("#custID").val();
			emp["firstName"] = $("#firstN").val();
			emp["lastName"] = $("#lastN").val();
			emp["address"] = $("#Cadd").val();
			emp["city"] = $("#Ccity").val();
			emp["state"] = $("#Cstate").val();
			emp["country"] = $("#Ccountry").val();
			emp["postalCode"] = $("#Ccode").val();
			emp["company"] = $("#Ccompany").val();
			emp["phone"] = $("#Cphone").val();
			emp["email"] = $("#Cemail").val();
			emp["fax"] = $("#Cfax").val();
			emp["supportRepID"] = $("#empId").val();

			if(emp["supportRepID"] && emp["firstName"] && emp["lastName"]){
			var newurl = "http://localhost:8080/MusicStore/music/AccessRecords/updateCustomer";
			$.ajax({
				type : "POST",
				contentType : "application/json",
				url : newurl,
				data : JSON.stringify(emp),
				dataType : 'json',
				success : function(data) {
					console.log(data);
					$('.head4').removeClass('hide');
					$('.alert-success').append("<strong>Success!</strong> Details of customer <strong>"+emp["firstName"]+" with ID:" +emp["custID"]+ "</strong> updated successfully. " +
							"<a href='customeradd.html' target='_self'> Click </a> to create or update the customer");
					$('.bodyCont').addClass('hide');
			
				},
				error : function(e) {
					console.log("Error: ", e);
				}
			});
			}else{alert("Please fill the mandatory data!");}
		});
 
 $('.head4').on('click','#closed', function(e) {
		e.preventDefault();
		location.reload();

	});

})