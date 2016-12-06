$(function() {
	$('#get-data').click(function() {
		var showData = $('#searchresult');

		$.getJSON('testSearch.json', function(data) {
			console.log(data);

			showData.empty();

			/*
			 * if (items.length) { var content = '<li>' + items.join('</li><li>') + '</li>';
			 * var list = $('<ul />').html(content); showData.append(list); }
			 */
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

		showData.text('Loading the JSON file.');
	});
});