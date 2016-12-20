$(function() {
	  
	  $('#Isubmit').click(function(g) {
		  
			g.preventDefault();
			
			var myRows = [];
			var $headers = $("th");
			var $rows = $("tbody tr").each(function(index, tr) {
			  myRows[index] = {};
			  myRows[index]["trackID"] = $(tr).find('.trackId').val();
			  myRows[index]["unitPrice"] = $(tr).find('.unitP').val();
			  myRows[index]["quantity"] = $(tr).find('.quantity').val();
			  });
		  
		  var invoice = {}
		  invoice["customerID"] = $("#custID").val();
		  invoice["invoiceDate"] = $("#form-date").val();
		  invoice["billingAddress"] = $("#iAddress").val();
		  invoice["billingCity"] = $("#iCity").val();
		  invoice["billingState"] = $("#iState").val();
		  invoice["billingCountry"] = $("#iCountry").val();
		  invoice["billingPostalCode"] = $("#iCode").val();
		  invoice["total"] = $("#tot").val();
		  invoice["invoiceLine"] = myRows;
			 
			inv = JSON.stringify(invoice);
			/*if(inv["customerID"] && inv["invoiceLine"] && inv["total"] && inv["invoiceDate"]){
			 console.log(JSON.stringify(inv));
			}else console.log("Please fill the mandatory data!");*/
			console.log(inv);
			if(invoice["customerID"] && invoice["invoiceLine"] && invoice["total"] && invoice["invoiceDate"]){
			var showData = $('.custInvoice');
			var newurl = "http://localhost:8080/MusicStore/music/AccessRecords/invoice";
			$.ajax({
				type : "POST",
				contentType : "application/json",
				url : newurl,
				data : inv,
				dataType : 'json',
				success : function(data) {
					$('.head4').removeClass('hide');
					$('.alert-success').append("<strong>Success!</strong> Invoice for customer ID:" +invoice["customerID"]+ " generated successfully. " +
							"<a href='invoice.html' target='_self'> Click </a> to create new invoice");
					$('.custInvoice').addClass('hide');	},
					error : function(e) {
						console.log("Error: ", e);
					},
			});
			}else{alert("Please fill the mandatory data!");}
		});

})