'use strict';

const burger = document.querySelector('.nav-trigger');
const menu = document.querySelector('.nav');
const close = document.querySelector('.nav-close')

function showRemoveMenu(){
	menu.classList.add('menu-visible');
}

function hideMenu(){
	menu.classList.remove('menu-visible');
}

var items = document.querySelectorAll('.nav__item');
for(var i=0; i < items.length; i++) {
	items[i].addEventListener('click', hideMenu);
}

burger.addEventListener('click', showRemoveMenu);
close.addEventListener('click', hideMenu);
