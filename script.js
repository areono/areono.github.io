// Select the card container
const cardContainer = document.querySelector('.card-container');

// Add a click event to toggle the "clicked" class
cardContainer.addEventListener('click', () => {
  cardContainer.classList.toggle('clicked');
}); 