$("#submitButton").click(function () {
	var submitInput = $("#submitText").val();
	console.log(submitInput);
	if (submitInput == "bb135") {
		pageRedirect();
	}
	else {
		$("#submitText").val("");
		$("#invalidPasswordTest").text("NOT VALID!").show().fadeOut(2000);
	}
});

function pageRedirect() {

	window.location.replace("bizzareBuzz.html");

}      
