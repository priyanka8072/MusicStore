$(function() {
	  
	  $('#Isubmit').click(function(e) {
		  
			e.preventDefault();
			
			var myRows = [];
			var $headers = $("th");
			var $rows = $("tbody tr").each(function(index, tr) {
			  myRows[index] = {};
			  myRows[index]["trackID"] = $(tr).find('.trackId').val();
			  myRows[index]["unitPrice"] = $(tr).find('.unitP').val();
			  myRows[index]["quantity"] = $(tr).find('.quantity').val();
			  });
		  
		  var inv = {}
			inv["customerID"] = $("#custID").val();
			inv["invoiceDate"] = $("#form-date").val();
			inv["billingAddress"] = $("#iAddress").val();
			inv["billingCity"] = $("#iCity").val();
			inv["billingState"] = $("#iState").val();
			inv["billingCountry"] = $("#iCountry").val();
			inv["billingPostalCode"] = $("#iCode").val();
			inv["total"] = $("#tot").val();
			inv["invoiceLine"] = myRows;
			 
			/*if(inv["customerID"] && inv["invoiceLine"] && inv["total"] && inv["invoiceDate"]){
			 console.log(JSON.stringify(inv));
			}else console.log("Please fill the mandatory data!");*/

			if(inv["customerID"] && inv["invoiceLine"] && inv["total"] && inv["invoiceDate"]){
			var showData = $('.custInvoice');
			var newurl = "http://localhost:8080/MusicStore/music/AccessRecords/invoice";
			$.ajax({
				type : "POST",
				contentType : "application/json",
				url : newurl,
				data : JSON.stringify(inv),
				dataType : 'json',
				success : function(data) {
					showData.empty();
				},
				error : function(e) {
					console.log("Error: ", e);
					display(e);
				}
			});
			}else{alert("Please fill the mandatory data!");}
		});

})