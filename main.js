//Hamburger menu
const menuButton = document.querySelector(".cabecalho__menu-button");

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle("active");

  const mobileMenu = document.querySelector(".cabecalho__menu__mobile-links");
  mobileMenu.classList.toggle("show");
})

// Check if there's a stored language preference in localStorage
const storedLanguage = localStorage.getItem('languagePreference');

// If there is a stored language preference, initialize the currentLanguage variable
if (storedLanguage) {
  currentLanguage = storedLanguage;
} else {
  // Default language if no preference is found in localStorage
  currentLanguage = 'pt-BR';
}

// Initial content update
changeLanguage(currentLanguage);

// Function to change the language
function changeLanguage(language) {
  currentLanguage = language;
  fetch(`${language}.json`)
    .then(response => response.json())
    .then(data => updateContent(data))
    .catch(error => console.error('Error loading language file', error));
  // Store the language preference in localStorage
  localStorage.setItem('languagePreference', language);
}

// Function to update the content based on language data
function updateContent(data) {
  Object.keys(data).forEach(key => {
    const element = document.querySelector(`.${key}, #${key}`);
    if (element) {
      element.innerHTML = data[key];
    }
  });
}

// Event listeners for language buttons
document.getElementById('pt-BR_button').addEventListener('click', () => changeLanguage('pt-BR'));

document.getElementById('en-US_button').addEventListener('click', () => changeLanguage('en-US'));
