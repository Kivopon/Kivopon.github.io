"use strict";
// HEADER START ANIMATION
let heading = document.querySelector("header");

window.addEventListener('load', startHeadAnim);

function startHeadAnim() {
	heading.setAttribute("data-head-anim", "start");
}

window.addEventListener('scroll', repeatHeadAnim); // when the page returns to the header, the animation plays again

function repeatHeadAnim(event) {
	if (window.pageYOffset >= 1080) {
	  heading.setAttribute("data-head-anim", "reset");
	}
	
	if (window.pageYOffset <= 400 && heading.dataset.headAnim == "reset") {
	  heading.setAttribute("data-head-anim", "start");
	}
}

// SCROLL TO TOP
let arrow = document.querySelector("#scroll-to-top-btn");

window.addEventListener('scroll', showScrollBtn); // when the page scrolls down shows an arrow to scroll to top of the page

function showScrollBtn() {
	if (window.pageYOffset >= 1080) {
	  arrow.setAttribute("data-arrow", "shown");
	} else {
	  arrow.setAttribute("data-arrow", "hidden");
	}
}

arrow.addEventListener("click", scrollToTop); // scrolls the page to the top by clicking on the arrow

function scrollToTop() {
	window.scrollTo(0, 0);
	arrow.setAttribute("data-arrow", "hidden");
}