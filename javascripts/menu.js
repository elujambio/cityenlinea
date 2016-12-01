$(document).ready(function(){
	var menuActive = false;
	$(".burger-menu-button").on("click", function(){
		if (menuActive == false) {
			menuActive = true;
			TweenMax.to(".burger-1", .3, { y: 8, rotation: 45, backgroundColor:  "#000000" });
			TweenMax.to(".burger-2", .3, { opacity: 0 });
			TweenMax.to(".burger-3", .3, { y: -8, rotation: -45, backgroundColor:  "#000000" });
			TweenMax.to(".burger-menu", .3, { x: "-100%" });
			console.log("clicked-menu");
		} else {
			menuActive = false;
			TweenMax.to(".burger-1", .3, { y: 0, rotation: 0, backgroundColor:  "#ffffff" });
			TweenMax.to(".burger-2", .3, { opacity: 1 });
			TweenMax.to(".burger-3", .3, { y: 0, rotation: 0, backgroundColor:  "#ffffff" });
			TweenMax.to(".burger-menu", .3, { x: "100%" });
			console.log("clicked-menu");
		}
	}); 
	$(".global-search").on("focus", function(){
		TweenMax.to(".menu__link", .3, { opacity: 0 }); 
		TweenMax.to(".global-search", .3, { width: 380 }); 
	});
	$(".global-search").on("blur", function(){
		TweenMax.to(".menu__link", .3, { opacity: 1 }); 
		TweenMax.to(".global-search", .3, { width: 200 }); 
	});
});