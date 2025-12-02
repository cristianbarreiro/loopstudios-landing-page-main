'use strict';

const hamburger = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');

const navBar = document.querySelector('.navbar-nav');

const navbarToggle = () => {
    if (navBar.style.left === '0px') {
        navBar.style.left = '-100%';
        document.body.style.overflow = 'auto';
    } else {
        navBar.style.left = '0px';
        document.body.style.overflow = 'hidden';
    }
};

hamburger.addEventListener('click', navbarToggle);
closeBtn.addEventListener('click', navbarToggle);

// Product card selection
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove selected class from all cards
        productCards.forEach(c => c.classList.remove('selected'));
        // Add selected class to clicked card
        card.classList.add('selected');
    });
});