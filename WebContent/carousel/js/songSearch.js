$(document).ready(
		function() {

			$("#submit").on(
					"click",
					function() {

						var order = $('#formdata').val();
						var newurl = '/musicstore/accessrecords/searchstore/'
								+ order;
						$.ajax({
							type : 'GET',
							url : newurl,
							contentType : "appication/json; charset=utf-8",
							dataType : 'json',
							success : function(data) {
								alert('response' + data);
							},
							success : function(data) {
								$('#searchresult').text(' ');

								for ( var index in data)
									$('#searchresult').append(
											'<tr>' + '<td>' + index + '</td>'
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