$(function() {
	$('#gpdf').click(function(){
var download = function(url, data, method){
        //url and data options required
        if( url && data ){
          jQuery('<form style="display: none" id="dr_submission" action="' + url
                 + '" method="' + (method||'post') + '">'
                 + '</form>').appendTo('body');
          //credentials
          jQuery('form#dr_submission').append('<textarea name="user_credentials"></textarea>');
          jQuery('form#dr_submission textarea[name=user_credentials]').val(data.user_credentials);

          //doc values
          for(var key in data.doc) {
            jQuery('form#dr_submission').append('<textarea name="doc['+key+']"></textarea>');
            jQuery('form#dr_submission textarea[name="doc['+key+']"]').val(data.doc[key]);
          }

          //submit the form
          if(confirm("press ok")) {jQuery('form#dr_submission').submit().remove(); }
        };
      };

      // setup the string represeting the html we want to submit
      var content = 'This is a sample PDF created using jQuery. Find more examples of what you can do with DocRaptor <a href="https://docraptor.com/">https://docraptor.com/</a> or contact support@docraptor.com with any questions.';

      var data = {
        doc: {
          test: true,
          type: 'pdf',
          document_content: content
        },
        user_credentials: "YOUR_API_KEY_HERE"
      };

      var call_download = function() {
        // this drops a form on the page and submits, which will result in a download dialog popping up
        download("http://docraptor.com/docs", data);
      };
	});
})