// Скрипт для мобильного меню
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navUl = document.querySelector('nav ul');

mobileMenuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Обработка отправки формы через Formspree
document.getElementById('contactForm').addEventListener('submit', function(e) {
  // Для вывода сообщений можно использовать стандартное поведение формы,
  // так как Formspree обрабатывает отправку. Если хотите дополнительно
  // уведомить пользователя, можно добавить уведомление.
  alert('Ваше сообщение отправлено, спасибо!');
});

