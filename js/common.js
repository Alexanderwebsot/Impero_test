$(document).ready(function () {
 $('.menu-button-mobile-d').on('click', function() {
 	let menu = $('.nav-top-header');
 	$(menu).addClass('nav-top-header__active');
 })
 $('.menu-close__header').on('click', function() {
 	let menu = $('.nav-top-header');
 	$(menu).removeClass('nav-top-header__active');
 })
 $('.menu-button-mobile_2').on('click', function() {
 	let menu = $('.nav-bottom');
 	$(menu).addClass('nav-top-header__active_2');
 })
 $('.close-menu_b').on('click', function() {
 	let menu = $('.nav-bottom');
 	$(menu).removeClass('nav-top-header__active_2');
 })
});