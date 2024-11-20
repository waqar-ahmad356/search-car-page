// Select the Clear button
const clearButton = document.getElementById('clear-button');

// Add a click event listener to the Clear button
clearButton.addEventListener('click', () => {
  // Select all checkboxes
  const checkboxes = document.querySelectorAll('.checkbox');
  
  // Iterate through each checkbox and uncheck it
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
});

// Get all the cards
const carCards = document.querySelectorAll('.filter-car-card');

// Add click event listeners to each card
carCards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove 'selected' class from all cards
    carCards.forEach(card => card.classList.remove('selected'));
    // Add 'selected' class to the clicked card
    card.classList.add('selected');
  });
});

