import './scss/main.scss'
import './components/header/header.scss'
import headerHtml from './components/header/header.html?raw'

function insertHeader(targetId) {
  try {
    // Получаем контейнер
    const container = document.getElementById(targetId);
    if (!container) return;
    
    // Создаем временный элемент для парсинга HTML
    const temp = document.createElement('div');
    temp.innerHTML = headerHtml;
    
    // Получаем header элемент
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
    console.error('Ошибка вставки компонента:', error);
  }
}

// Вставляем шапку
document.addEventListener('DOMContentLoaded', () => {
  insertHeader('header-container');
});