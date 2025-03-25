"use strict";
// DROPLIST IN THIRD SECTION
let droplist1 = document.querySelector("#point-1");
let droplist2 = document.querySelector("#point-2");
let droplist3 = document.querySelector("#point-3");
let droplist4 = document.querySelector("#point-4");

droplist1.addEventListener("click", openDroplist); // opens the droplist by clicking on it
droplist2.addEventListener("click", openDroplist); // opens the droplist by clicking on it
droplist3.addEventListener("click", openDroplist); // opens the droplist by clicking on it
droplist4.addEventListener("click", openDroplist); // opens the droplist by clicking on it

function openDroplist() {
	if (this.getAttribute("id") == droplist1.getAttribute("id")) {
		if (!this.hasAttribute("data-droplistP")) {
		  this.setAttribute("data-droplistP", "opened");
		  droplist2.removeAttribute("data-droplistP");
		  droplist3.removeAttribute("data-droplistP");
		  droplist4.removeAttribute("data-droplistP");
		} else {
		  this.removeAttribute("data-droplistP");
		}
	}
	
	if (this.getAttribute("id") == droplist2.getAttribute("id")) {
		if (!this.hasAttribute("data-droplistP")) {
		  this.setAttribute("data-droplistP", "opened");
		  droplist1.removeAttribute("data-droplistP");
		  droplist3.removeAttribute("data-droplistP");
		  droplist4.removeAttribute("data-droplistP");
		} else {
		  this.removeAttribute("data-droplistP");
		}
	}
	
	if (this.getAttribute("id") == droplist3.getAttribute("id")) {
		if (!this.hasAttribute("data-droplistP")) {
		  this.setAttribute("data-droplistP", "opened");
		  droplist1.removeAttribute("data-droplistP");
		  droplist2.removeAttribute("data-droplistP");
		  droplist4.removeAttribute("data-droplistP");
		} else {
		  this.removeAttribute("data-droplistP");
		}
	}
	
	if (this.getAttribute("id") == droplist4.getAttribute("id")) {
		if (!this.hasAttribute("data-droplistP")) {
		  this.setAttribute("data-droplistP", "opened");
		  droplist1.removeAttribute("data-droplistP");
		  droplist2.removeAttribute("data-droplistP");
		  droplist3.removeAttribute("data-droplistP");
		} else {
		  this.removeAttribute("data-droplistP");
		}
	}
}

// BURGER NAV MENU
let nav = document.querySelector("#nav-block");
let lines = nav.querySelector(".lines");

nav.addEventListener("click", openNav, true); // opens the side navigation by clicking on the navigation icon

function openNav(event) {
	if (!nav.hasAttribute("data-nav")) {
	  nav.setAttribute("data-nav", "opened");
	  lines.setAttribute("data-lines", "rotated");
	  lines.classList.toggle("lines-rotated");
	  
	  event.stopImmediatePropagation();
	}
}

lines.addEventListener("click", closeNav, false); // minimizes side navigation by clicking on the overlay or navigation items

function closeNav(event) {
	if (nav.dataset.nav = "opened") {
	  nav.removeAttribute("data-nav");
	  lines.removeAttribute("data-lines");
	  lines.classList.toggle("lines-rotated");
	} else {
	  event.stopImmediatePropagation();
	}
}

// FIXED MOBILE HEADER
let y = document.querySelector("header");
let fixedHeader = document.querySelector("#fixed-mobile-header");
let burgerNav = fixedHeader.querySelector("#burger-nav");
let fixedLines = fixedHeader.querySelector(".lines");

fixedLines.addEventListener("click", openBurger, true); // opens the side navigation by clicking on the navigation icon

function openBurger(event) {
	if (!burgerNav.hasAttribute("data-nav-block")) {
	  burgerNav.setAttribute("data-nav-block", "opened");
	  fixedLines.setAttribute("data-lines", "rotated");
	  
	  event.stopImmediatePropagation();
	}
}

fixedLines.addEventListener("click", closeBurger, false); // minimizes side navigation by clicking on the overlay or navigation items

function closeBurger(event) {
	if (burgerNav.dataset.navBlock = "opened") {
	  burgerNav.removeAttribute("data-nav-block");
	  fixedLines.removeAttribute("data-lines");
	} else {
	  event.stopImmediatePropagation();
	}
}

window.addEventListener('scroll', fixHeader); // when the page scrolls down shows a fixed header

function fixHeader() {
	if (window.pageYOffset >= y.clientHeight) {
	  fixedHeader.setAttribute("data-header", "fixed");
	} else {
	  closeBurger();
	  fixedHeader.removeAttribute("data-header");
	}
	
	if (window.pageYOffset >= y.clientHeight && nav.hasAttribute("data-nav")) {
	  closeNav();
	}
}

window.addEventListener("click", closeNavs); // close navs by clicking on the empty space

function closeNavs(event) {
	let targetId = event.target.getAttribute("id");
	
	if (targetId != "nav-block" && targetId != "burger-nav") {
		if (nav.hasAttribute("data-nav")) {
		  nav.removeAttribute("data-nav");
		  lines.removeAttribute("data-lines");
		  lines.classList.toggle("lines-rotated");
		}
		
		if (burgerNav.dataset.navBlock = "opened") {
		  burgerNav.removeAttribute("data-nav-block");
		  fixedLines.removeAttribute("data-lines");
		}
	}
}