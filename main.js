'use strict';

// 要素を取得
const rotateButton = document.getElementById('rotate-btn');
const backgroundLayer = document.getElementById('background-layer');

// ボタンクリック時の動作
rotateButton.addEventListener('click', () => {
  backgroundLayer.classList.toggle('is-rotated');
});
