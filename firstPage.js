 $("#submitButton").click(function() {
	var submitInput = $("#submitText").val();
	console.log(submitInput);
	if (submitInput == 'nikunj123') {
			pageRedirect();
	}
	else {
		$( "span" ).text( "Not valid!" ).show().fadeOut( 2000 );
	}
});

    function pageRedirect() {

        window.location.replace("bizzareBuzz.html");

    }      
