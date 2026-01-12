'use strict'

const rotateButton = document.getElementById('rotate-btn');
const backgroundLayer = document.getElementById('background-layer');

rotateButton.addEventListener('click', () => {
  backgroundLayer.classList.toggle('is-rotated');
});
