var buttons = document.querySelectorAll('.slider-btn');
var promoted = document.querySelectorAll('.promoted-item');
var true_btn_value = '&#xe931;';
var false_btn_value = '&#xe930;';
var promotedSlider=function(activeOne){
	buttons[activeOne].addEventListener("click", function (evt) {
		evt.preventDefault();
		for(var i = 0; i<buttons.length; i++) {
			buttons[i].innerHTML = false_btn_value;
			promoted[i].classList.remove("promoted-active");
		}
			buttons[activeOne].innerHTML = true_btn_value;
			promoted[activeOne].classList.add("promoted-active");
	});	
}
for(var i=0; i<buttons.length; i++){
	promotedSlider(i);
}
var advBtn = document.querySelectorAll('.adv-left-column .special-btn');
var advAbout = document.querySelectorAll('.adv-right-column');
var advSlider=function(activeOne){
	advBtn[activeOne].addEventListener("click", function (evt) {
		evt.preventDefault();
		for(var i = 0; i<advBtn.length; i++) {
			advBtn[i].classList.remove("active-special");
			advAbout[i].classList.remove("about-active");
		}
			advBtn[activeOne].classList.add("active-special");
			advAbout[activeOne].classList.add("about-active");
	});	
}
for(var i=0; i<advBtn.length; i++){
	advSlider(i);
}


var mapOpener=document.querySelector(".map-opener");
var map=document.querySelector(".map-pop-up");
var mapCloser=document.querySelector(".map-close-button");
var writeUs=document.querySelector(".write-us-pop-up");
var writeUsOpener=document.querySelector(".special-btn.write-us-opener");
var writeUsCloser=document.querySelector(".writeUs-close-button");

mapOpener.addEventListener("click", function(evt){
	evt.preventDefault();
	map.classList.add("opening-up");
	writeUs.classList.remove("opening-up");
});

mapCloser.addEventListener("click", function(evt){
	evt.preventDefault();
	map.classList.remove("opening-up");
});

writeUsOpener.addEventListener("click", function(evt){
	evt.preventDefault();
	writeUs.classList.add("opening-up");
	map.classList.remove("opening-up");
});		

writeUsCloser.addEventListener("click", function(evt){
	evt.preventDefault();
	writeUs.classList.remove("opening-up");
});


var writeUsForm=document.querySelector(".write-us-centerer form");
var names=writeUs.querySelector(".write-us-first-floor input");
var email=writeUs.querySelector(".email-write-us");
var letter=writeUs.querySelector(".letter-write-us");
console.log(names);
console.log(email);
console.log(letter);
writeUsForm.addEventListener("submit", function(evt){
	evt.preventDefault();
	if(!names.value ||!email.value || !letter.value){
		names.classList.add("not-valid");
		email.classList.add("not-valid");
		letter.classList.add("not-valid");
	}else{
		names.classList.remove("not-valid");
		email.classList.remove("not-valid");
		letter.classList.remove("not-valid");		
	}
});
var del=function(field){
	field.addEventListener("click", function(evt){
		field.classList.remove("not-valid");
	});
}
del(names);
del(email);
del(letter);