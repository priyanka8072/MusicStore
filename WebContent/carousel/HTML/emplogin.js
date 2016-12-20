$('#empSubmit').click(function(g) {
		  
			g.preventDefault();
			
		  
		  var user = {}
		  user["userName"] = $("#inputName").val();
		  user["password"] = $("#inputPassword").val();
			 
			if(user["userName"] && user["password"]){
			var newurl = "http://localhost:8080/MusicStore/music/LoginController/login";
			$.ajax({
				type : "POST",
				contentType : "application/json",
				url : newurl,
				data : JSON.stringify(user),
				dataType : 'json',
				success : function(data) {
					console.log(data);
					window.open("invoice.html");
					window.open('', '_self').close();
					},
					
					error : function(e) {
						$('.alert-danger').removeClass('hide');
						$('.alert-danger').append("<strong>Alert!</strong> Please enter valid username and password"
								);
						console.log("Error: ", e);
					},
			});
			}else{alert("Please fill the mandatory data!");}
		});
