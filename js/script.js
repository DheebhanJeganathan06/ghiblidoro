const toggleButton = document.getElementById('themeToggle');
const root = document.documentElement;

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  root.classList.add('dark');
}

// Toggle theme on click
toggleButton.addEventListener('click', () => {
  root.classList.toggle('dark');

  // Save preference
  if (root.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
