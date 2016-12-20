$(function() {

	var ft = 0;
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
						if(!data["firstName"]){
							 
							$('.alert').removeClass('hide');
							$('.alert').append("<strong>Alert!</strong><a href='customeradd.html' target='_self'> Customer</a> "+ custID +" does not exist. Click on customer to create new"
									);
							$('#custID').val(null);

						}else{
							$('#iAddress').val(data['address']);
							$('#iCity').val(data['city']);
							$('#iState').val(data['state']);
							$('#iCountry').val(data['country']);
							$('#iCode').val(data['postalCode']);

						}
							
					}
			  });
			  };
		
	});
	
$('.close').click(function(e) {	
	e.preventDefault();
	location.reload();

});

$('.form-group').on('keyup','.track', function() {
	      var row = $(this).closest('tr');
		  var input=row.find('.trackId').val();
		  var newurl = "http://localhost:8080/MusicStore/music/AccessRecords/unitPrice/" + input;
		  if(input){
		  $.ajax({
			type: "GET",
			contenType:"application/json",
			url: newurl,
			dataType: 'json',
				success : function(data){
					row.find(".unitP").val(data.unitPrice);
					row.find(".tname").val(data.trackName);
					/*index++;*/
				}
		  });
		  };
	  
});

$('.form-group').on('keyup','.quant', function() {	  
			  //e.preventDefault();
		      var row = $(this).closest('tr');
			  var unitP = row.find('.unitP').val();
			  var quantity = row.find('.quantity').val();
			  var total = unitP * quantity;
			  var dvalue = parseFloat(row.find('.rtotal').val());
			  row.find('.rtotal').val(total.toFixed(2));
});


$('.form-group').on('keyup','.rtotal', function() {	  
	  //e.preventDefault();
	var row = $(this).closest('tr');
	var rvalue = parseFloat(row.find('.rtotal').val());
	 ft = (ft + rvalue);
	$('.fTotal').val(ft.toFixed(2));

});

$('.form-group').on('click','.btnDelete', function() {	  
	  //e.preventDefault();
    	var row = $(this).closest('tr');
    	var dvalue = parseFloat(row.find('.rtotal').val());
    	if(dvalue){
    		ft = (ft - dvalue);
    		$('.fTotal').val(ft.toFixed(2));
    	}
    		row.remove();
	  


});
var index = 1;

$('.form-group').on('click','.btnAdd', function() {
	
	
	var appendTxt = "<tr>" +
	"<td><input type='number' class='form-control' placeholder='Number' readonly='readonly' value="+(index+1)+"></td>" +
	"<td class ='track'><input type='number' class='form-control trackId' placeholder='Track ID' required='required'></td>" +
	"<td><input type='text' class='form-control tname' placeholder='Track Name' readonly='readonly'></td>" +
	"<td><input type='number' class='form-control unitP' placeholder='UnitPrice' readonly='readonly'></td>" +
	"<td class ='quant'><input type='number' class='form-control quantity' placeholder='Quantity'></td>" +
	"<td><input type='number' class='form-control rtotal' placeholder='Row Total' readonly='readonly'></td>" +
	"<td><button class='btnDelete'>-</button></td>" +
	"<td><button class='btnAdd'>+</button></td>" +
	"</tr>";
	index++;
/*   $('.btnAdd:last').addClass('hide');
*/
	

	$("tr:last").after(appendTxt);
/*	var row = $(this).closest('tr');
	var rvalue = parseFloat(row.find('.rtotal').val());
	 ft = (ft + rvalue);
	$('.fTotal').val(ft.toFixed(2));
	  console.log(ft);*/


		});

// Automatically add a first row of data
/*	$('.btnAdd').click();
*/
})