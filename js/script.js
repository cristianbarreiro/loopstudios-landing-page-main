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

const selectCard = (card) => {
    // Remove selected class from all cards
    productCards.forEach(c => c.classList.remove('selected'));
    // Add selected class to clicked card
    card.classList.add('selected');
};

productCards.forEach(card => {
    // Click event
    card.addEventListener('click', () => {
        selectCard(card);
    });
    
    // Keyboard event (Enter or Space)
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectCard(card);
        }
    });
});