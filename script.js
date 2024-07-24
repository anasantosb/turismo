// daltonismo
document.getElementById('color-filter').addEventListener('change', function() {
  const filterClass = this.value; 
  const images = document.querySelectorAll('.filter-image');
  images.forEach(img => {
      img.className = 'filter-image'; 
      if (filterClass !== 'default') {
          img.classList.add(filterClass);
      }
  });
});


//alteração do fundo
const blackAndWhiteBtn = document.getElementById('blackAndWhite');
const highContrastBtn = document.getElementById('highContrast');
const blueContrastBtn = document.getElementById('blueContrast');
const greenContrastBtn = document.getElementById('greenContrast');
const yellowContrastBtn = document.getElementById('yellowContrast');

blackAndWhiteBtn.addEventListener('click', function() {
  document.body.classList.remove('high-contrast', 'blue-contrast', 'green-contrast', 'yellow-contrast');
  document.body.classList.add('black-and-white');
});

highContrastBtn.addEventListener('click', function() {
  document.body.classList.remove('black-and-white', 'blue-contrast', 'green-contrast', 'yellow-contrast');
  document.body.classList.add('high-contrast');
});

blueContrastBtn.addEventListener('click', function() {
  document.body.classList.remove('high-contrast', 'black-and-white', 'green-contrast', 'yellow-contrast');
  document.body.classList.add('blue-contrast');
});

greenContrastBtn.addEventListener('click', function() {
  document.body.classList.remove('high-contrast', 'black-and-white', 'blue-contrast', 'yellow-contrast');
  document.body.classList.add('green-contrast');
});

yellowContrastBtn.addEventListener('click', function() {
  document.body.classList.remove('high-contrast', 'black-and-white', 'blue-contrast', 'green-contrast');
  document.body.classList.add('yellow-contrast');
});

document.addEventListener('DOMContentLoaded', () => {
  const increaseFontButton = document.getElementById('increaseFont');
  const decreaseFontButton = document.getElementById('decreaseFont');
  
  const textElements = document.querySelectorAll('body, body *'); // Select all elements inside the body
  
  increaseFontButton.addEventListener('click', () => {
      textElements.forEach(el => {
          const currentFontSize = parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'));
          el.style.fontSize = (currentFontSize + 2) + 'px';
      });
  });

  decreaseFontButton.addEventListener('click', () => {
      textElements.forEach(el => {
          const currentFontSize = parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'));
          if (currentFontSize > 12) {
              el.style.fontSize = (currentFontSize - 2) + 'px';
          }
      });
  });
});

