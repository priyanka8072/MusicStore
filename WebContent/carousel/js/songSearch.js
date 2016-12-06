/*$(document).ready(
		function() {

			$("#submit").on(
					"click",
					function() {

						var order = $('#formdata').val();
						var newurl = './carousel/js/testSearch.json';
						alert(newurl)
						$.ajax({
							type : 'GET',
							url : newurl,
							contentType : "appication/json; charset=utf-8",
							dataType : 'json',
							data : order,
							success : function(data) {
								alert('response' + data);
							},
							success : function(data) {
								$('#searchresult').text(' ');

								for ( var index in data)
									$('#searchresult').append(
											'<tr>' + '<td>' + data[index].id + '</td>'
													+ '<td>'
													+ data[index].songName
													+ '</td>' + '<td>'
													+ data[index].albumTitle
													+ '</td>' + '<td>'
													+ data[index].artistName
													+ '</td>' + '<td>'
													+ data[index].genreName
													+ '</td>' + '</tr>')
							},
							error : function(jqXHR, textStatus, errorThrown) {
								alert(newurl);
								alert(' Error in processing! ' + textStatus);
								console.log(jqXHR);
							}
						});
					});
		});

$(document).ready(function () {

$("#submit").click(function() {
$.getJSON('testSearch.json.do',

			function(data) {
				alert('response received' + data)
				
			},
			function(jqXHR, textStatus, errorThrown) {
				alert(newurl);
				alert(' Error in processing! ' + textStatus)
			});
});
})*/

$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#searchresult');
    alert('in js');
    $.getJSON('testSearch.json', function (data) {
      console.log(data);

      var items = data.items.map(function (item) {
        return item.key + ': ' + item.value;
      });

      showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');
  });
});








