$(function() {

$('#empSubmit').click(function(g) {
		  
			g.preventDefault();
			
		  
		  var user = {}
		  user["username"] = $("#inputName").val();
		  user["password"] = $("#inputPassword").val();
			 
			if(user["username"] && user["password"]){
			var newurl = "http://localhost:8080/MusicStore/music/LoginController/login";
			$.ajax({
				type : "POST",
				contentType : "application/json",
				url : newurl,
				data : JSON.stringify(user),
				dataType : 'json',
				success : function(data) {
					console.log(data);
					window.open("invoice.html","_self");
					},
					
					error : function(e) {
						$('.alert-danger').removeClass('hide');
						$('.alert-danger').append("<strong>Alert!</strong> Please enter valid username and password"
								);
					},
			});
			}else{alert("Please fill the mandatory data!");}
		});

$('.close').click(function(e) {	
	e.preventDefault();
	location.reload();

});

})