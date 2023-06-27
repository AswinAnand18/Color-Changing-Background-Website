const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']; // Array of colors for the background
const body = document.body;

function changeBackgroundColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
}

// Call the changeBackgroundColor function every 2 seconds
setInterval(function() {
  body.classList.add('transition');
  changeBackgroundColor();
  setTimeout(function() {
    body.classList.remove('transition');
  }, 500); // Remove transition class after 500ms
}, 2000);
