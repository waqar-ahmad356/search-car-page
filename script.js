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
