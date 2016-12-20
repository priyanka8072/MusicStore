$(function() {

$(function() {
	  $(".searchdata").keyup(function (e) {
		    if (e.which == 13) {
		      $('.getdata').trigger('click');
		    }
		  });

	$('.getdata').click(function(g) {
		
		g.preventDefault();
		
		var showData = $('#searchresult');

		var input=$('.searchdata').val();
		if(input){
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
		} else (alert("Search for song/artist/album"));
	});
})
})