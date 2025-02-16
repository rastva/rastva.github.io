// Получаем элементы меню и кнопок
const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const popupMenu = document.getElementById('popup-menu');

// Функция для открытия меню
openMenuBtn.addEventListener('click', () => {
  popupMenu.classList.add('active');
});

// Функция для закрытия меню
closeMenuBtn.addEventListener('click', () => {
  popupMenu.classList.remove('active');
});

// Дополнительно: Закрывать меню при клике на любую ссылку внутри меню
const menuLinks = popupMenu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => popupMenu.classList.remove('active'));
});
