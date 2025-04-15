"use strict";
let heading = document.querySelector("header");

let timerId = setInterval(startHeadAnim, 100);

function startHeadAnim() {
	heading.setAttribute("data-head-anim", "start");
	
	clearInterval(timerId);
}