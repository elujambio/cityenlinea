var galleryActive = false;
var activePhotoID = 0;
$(document).ready(function($) {
	// Changes the gallery picture source to the clicked thumb src
	$("[data-thumbnail").on("click",
		function(){
			galleryActive = true;
			console.log("Clicked Thumbnail");
			activePhotoID = parseInt($(this).attr("data-thumbnail"));
			console.log("activePhotoID:  " + activePhotoID);
			dataThumbnail = $(this);
			$(".picture-container img").attr("src", dataThumbnail.attr("data-src"));
			TweenMax.to(".picture-container", .1, {
				opacity:  1, 
				pointerEvents:  "all"
			}); 

		});
	$(".picture-next").on("click", function(){
		if(activePhotoID < $("[data-thumbnail]").length){
			activePhotoID = parseInt(activePhotoID) + 1; 
			console.log("Changed Image Source, AFID:  " + activePhotoID);
			$(".picture img").attr("src", $("[data-thumbnail='"+activePhotoID+"']").attr("data-src"));
		}
	}); 
	$(".picture-previous").on("click", function(){
		if(activePhotoID > 0){
			activePhotoID = parseInt(activePhotoID) - 1; 
			console.log("Changed Image Source, AFID:  " + activePhotoID);
			$(".picture img").attr("src", $("[data-thumbnail='"+activePhotoID+"']").attr("data-src"));
		}
	}); 
	// Transitions background color and opacity of previous
	//  and next buttons on hover and on click
	$(".picture-previous, .picture-next").on("mouseover mousedown", function(){
		TweenMax.to($(this), .3, {
			backgroundColor:  "rgba(33,33,33,1)",
			opacity:  .7
		});
	});
	// Transitions the same properties back on mouse out and 
	// click end
	$(".picture-previous, .picture-next").on("mouseout mouseup", function(){
		TweenMax.to($(this), .3, {
			backgroundColor:  "rgba(33,33,33,0)",
			opacity:  1
		});
	});
	// Closes the gallery on ESC key
	$(document).on("keyup", function($){
		if($.keyCode == 27 && galleryActive == true){
			galleryActive = false;
			TweenMax.to(".picture-container", .1, {
				opacity:  0,
				pointerEvents:  "none"
			});
		}
	});
	// Closes the gallery on .close-button click
	$(".close-button").on("click", function(){
		if(galleryActive == true){
			TweenMax.to(".picture-container", .1, {
				opacity:  0,
				pointerEvents:  "none"
			});	
		}
	});

});