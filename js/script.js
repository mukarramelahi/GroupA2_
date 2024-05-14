const lightModeBtn = document.getElementById('light-mode');
const darkModeBtn = document.getElementById('dark-mode');

// Check if user has previously set a preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Handle click events for light and dark mode buttons
lightModeBtn.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
});

darkModeBtn.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
});


