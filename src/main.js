import './scss/main.scss'
import './components/header/header.scss'

// Функция для загрузки и трансформации контейнера в компонент
async function loadComponent(url, targetId) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    
    // Получаем контейнер
    const container = document.getElementById(targetId);
    
    // Создаем временный элемент для парсинга HTML
    const temp = document.createElement('div');
    temp.innerHTML = html;
    
    // Получаем header элемент из загруженного HTML
    const headerElement = temp.firstElementChild;
    
    // Копируем все атрибуты из header в контейнер
    Array.from(headerElement.attributes).forEach(attr => {
      container.setAttribute(attr.name, attr.value);
    });
    
    // Копируем внутреннее содержимое
    container.innerHTML = headerElement.innerHTML;
    
    // Меняем тег с div на header (это создаст новый элемент)
    const newHeader = document.createElement('header');
    // Копируем все атрибуты
    Array.from(container.attributes).forEach(attr => {
      newHeader.setAttribute(attr.name, attr.value);
    });
    // Копируем содержимое
    newHeader.innerHTML = container.innerHTML;
    
    // Заменяем div на header
    container.parentNode.replaceChild(newHeader, container);
    
  } catch (error) {
    console.error('Ошибка загрузки компонента:', error);
  }
}

// Загружаем шапку
loadComponent('/src/components/header/header.html', 'header-container');