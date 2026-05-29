const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
themeToggleBtn.addEventListener('click', function() {
    htmlElement.classList.toggle('dark');
});






