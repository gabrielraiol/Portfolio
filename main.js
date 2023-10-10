//Hamburger-menu
function toggleMobileMenu() {
    const mobileMenu = document.querySelector(".cabecalho__menu__mobile-links");
    const menuButton = document.querySelector(".cabecalho__menu-button");

    mobileMenu.classList.toggle("show");
    menuButton.classList.toggle("active");
}

// Default language (e.g., Portuguese)
let currentLanguage = 'pt-BR';

// Function to change the language
function changeLanguage(language) {
  currentLanguage = language;
  fetch(`${language}.json`)
    .then(response => response.json())
    .then(data => updateContent(data))
    .catch(error => console.error('Error loading language file', error));
}

// Function to update the content based on language data
function updateContent(data) {
  Object.keys(data).forEach(key => {
    const element = document.querySelector(`.${key}, #${key}`);
    if (element) {
      element.textContent = data[key];
    }
  });
}

// Event listeners for language buttons
document.getElementById('pt-BR_button').addEventListener('click', () => changeLanguage('pt-BR'));

document.getElementById('en-US_button').addEventListener('click', () => changeLanguage('en-US'));

// Initial content update
changeLanguage(currentLanguage);
