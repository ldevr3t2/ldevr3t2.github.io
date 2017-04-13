//JQuery handling the control of the recommendation form

//when the add artists is clicked, more fields are added.
$(document).ready(function() {
	//allows the user to add artists to the form, up to 5 artists

	var artistList = [
		"<input type=\"text\" name=\"artist-1\" id=\"artist-1\" value=\"\" placeholder=\"e.g. Van Morrison\" />",
		"<input type=\"text\" name=\"artist-2\" id=\"artist-2\" value=\"\" placeholder=\"e.g. Van Stephensen\" />",
		"<input type=\"text\" name=\"artist-3\" id=\"artist-3\" value=\"\" placeholder=\"e.g. Van Craven\" />",
		"<input type=\"text\" name=\"artist-4\" id=\"artist-4\" value=\"\" placeholder=\"e.g. Van Williams\" />"
	];

	var artistCounter = 0;

	$("#addArtist").click(function() {

		//we will check to see how many artists are on screen
		if(artistCounter < 5) {
			//if less than 5, another artist is added
			$("#field").append(artistList[artistCounter]);
			artistCounter++;
		}
		
		if(artistCounter == 4) {
			//we disable the button at 5 presses
			$("#addArtist").addClass("disabled");
		}

	});

	$("#recommendationForm").submit(function(e) {
		var url = "CHANGE THIS";

		$.ajax({
           type: "POST",
           crossDomain: true,
           url: url,
           data: $("#idForm").serialize(), // serializes the form's elements.
           success: function(result)
           {
       			$("#recommendationMatch").css("display", "block");
              	$("#recommendationMatch").html("We recommend " + result.artist);
           },
           error: function() {
           		$("#recommendationMatch").css("display", "block");
           		$("#recommendationMatch").html("Sorry, we don't have any recommendations from your query.");
           }
         });

	    e.preventDefault(); // avoid to execute the actual submit of the form.

	});
});