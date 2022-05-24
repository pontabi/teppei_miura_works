'use strict';

// 忘却の都市のモーダルウィンドウ
const btnOpenBoukyaku = document.getElementById('btn-open-boukyaku');
const modalBoukyakuContainer = document.getElementById(
  'modal-boukyaku-container'
);

btnOpenBoukyaku.addEventListener('click', () => {
  modalBoukyakuContainer.classList.add('isOpen');
});

modalBoukyakuContainer.addEventListener('click', () => {
  modalBoukyakuContainer.classList.remove('isOpen');
});
