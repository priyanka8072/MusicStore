$(function() {
/*	  $("#form-data").keyup(function (e) {
		    if (e.which == 13) {
		      $('#get-data').trigger('click');
		    }
		  });
	  
	$('#get-data').click(function() {
		var showData = $('#searchresult');

		var input=$('#form-data').val();
		if(input){
		var url = "http://localhost:8080/MusicStore/music/AccessRecords/searchSong";
		$.getJSON(url, input, function(data) {
			console.log(data);

			showData.empty();
			 
			var columns = [ "trackID", "trackName", "albumTitle","artistName","genreName" ];
			for (var i = 0; i < data.length; i++) {
				var row$ = $('<tr/>');
				for (var colIndex = 0; colIndex < columns.length; colIndex++) {
					var cellValue = data[i][columns[colIndex]];

					if (cellValue == null) {
						cellValue = "";
					}

					row$.append($('<td/>').html(cellValue));
				}
				showData.append(row$);
			}

		});
		showData.text('No data available');
		}else{
			alert("Please enter a track/album/artist name in search box !");
		}
		
	});
});*/

$(function() {
	  $("#form-data").keyup(function (e) {
		    if (e.which == 13) {
		      $('#get-data').trigger('click');
		    }
		  });

	$('#get-data').click(function() {
		var showData = $('#searchresult');

		var input=$('#form-data').val();
		var newurl = "http://localhost:8080/MusicStore/music/AccessRecords/searchSong";
				
		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : newurl,
			data : input,
			dataType : 'json',
			success : function(data) {
					console.log(data);

					showData.empty();

					 
					var columns = [ "trackID", "trackName", "albumTitle","artistName","genreName" ];
					for (var i = 0; i < data.length; i++) {
						var row$ = $('<tr/>');
						for (var colIndex = 0; colIndex < columns.length; colIndex++) {
							var cellValue = data[i][columns[colIndex]];

							if (cellValue == null) {
								cellValue = "";
							}

							row$.append($('<td/>').html(cellValue));
						}
						showData.append(row$);
					}
			  }
			});		
	});
})
})