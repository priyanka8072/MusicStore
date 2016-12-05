$(document).ready(
		function() {

			$("#Csubmit").on(
					"click",
					function() {
						
						var obj={};
						obj.firstN = $('#firstN').val();
						obj.lastN = $('#lastN').val();
						obj.Cadd = $('#Cadd').val();
						obj.Ccity = $('#Ccity').val();
						obj.Cstate = $('#Cstate').val();
						obj.Ccountry = $('#Ccountry').val();
						obj.Cacode = $('#Cacode').val();
						obj.Ccompany = $('#Ccompany').val();
						obj.Cphone = $('#Cphone').val();
						obj.Cemail = $('#Cemail').val();
						obj.Cfax = $('#Cfax').val();
						obj.empid = $('#empid').val();

						var newurl = '/musicstore/accessrecords/searchstore/';
						$.ajax({
							type : 'GET',
							url : newurl,
							contentType : "appication/json; charset=utf-8",
							dataType : 'json',
							data : JSON.stringify(obj),
							success : function(data) {
								alert('Customer created with ID:' + data);
							},
							error : function(jqXHR, textStatus, errorThrown) {
								alert(newurl);
								alert(' Error in processing! ' + textStatus);
								console.log(jqXHR);
							}
						});
					});
		});