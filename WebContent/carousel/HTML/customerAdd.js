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
			var showData = $('#showcus');
			var newurl = "http://localhost:8080/MusicStore/music/AccessRecords/saveCust";
			$.ajax({
				type : "POST",
				contentType : "application/json",
				url : newurl,
				data : JSON.stringify(emp),
				dataType : 'json',
				success : function(data) {
					showData.empty();
					$('form').addClass('hide');
					showData.append("<P> ID:"+data[id]+"generated for customer " +emp["firstName"]+"</p>" +
							"<a href='http://localhost:8080/MusicStore/carousel/HTML/customeradd.html'>Add New Customer<a>");
				},
				error : function(e) {
					console.log("Error: ", e);
					display(e);
				}
			});
			}else{alert("Please fill the mandatory data!");}
		});

})