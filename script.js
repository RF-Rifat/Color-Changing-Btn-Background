// Define an array of colors
const colors = ['#FF5733', '#DAF7A6', '#FFC300', '#C70039', '#900C3F', '#FF5733', '#DAF7A6', '#FFC300', '#C70039', '#900C3F'];

// Get the button element by ID
const btn = document.getElementById('color-btn');

// Add a click event listener to the button
btn.addEventListener('click', () => {
  // Generate a random number between 0 and the length of the colors array
  const randomIndex = Math.floor(Math.random() * colors.length);
  // Get the color at the random index
  const randomColor = colors[randomIndex];
  // Set the background color of the body to the random color
  document.body.style.backgroundColor = randomColor;
});

// button color
const button = document.querySelector('#color-btn');

button.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  button.style.backgroundColor = '#' + randomColor;
});

