// Пример простой обработки формы
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Получение данных из формы
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(name && email && message) {
    // Здесь можно добавить отправку данных на сервер через fetch/AJAX
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    // Очистка формы
    this.reset();
  } else {
    alert('Пожалуйста, заполните все поля.');
  }
});
