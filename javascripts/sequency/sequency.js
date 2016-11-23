
// Made by Pablo E. Lujambio 
// Github: elujambio
// Instagram: elujambio

function SequencyLoad(Images, ImageSources, ImageElements, Counter){
	if (Counter < ImageElements.length) {
		ImageSources[Counter] = ImageElements[Counter].getAttribute("data-src");
		Images[Counter] = new Image();  

		Images[Counter].addEventListener("load", function callNext() {
			if (ImageElements[Counter].tagName === "IMG") {
				ImageElements[Counter].src = Images[Counter].src;
			} else {
				ImageElements[Counter].style.backgroundImage = "url('" + Images[Counter].src + "')";
			}
			console.log("Image " + Counter + " loaded");
			Images[Counter].removeEventListener("load", callNext);
			Counter++;
			if(Counter < ImageElements.length) {
				SequencyLoad(Images, ImageSources, ImageElements, Counter);
			}
		});
		Images[Counter].src = ImageSources[Counter];
	}
}
function Sequency(){
	var Counter = 0;
	var Images = []; 
	var ImageSources = [];
	var ImageElements = document.querySelectorAll('[data-src]');
	SequencyLoad(Images, ImageSources, ImageElements, Counter);
}