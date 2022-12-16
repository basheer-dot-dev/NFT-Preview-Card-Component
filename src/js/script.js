const element = document.querySelector('.overlay');
const eye = document.getElementById('eye');

element.addEventListener("mouseover", () => {
    eye.classList.add('visible');
    eye.classList.remove('invisible');
});
element.addEventListener("mouseout", () => {
    eye.classList.add('invisible');
    eye.classList.remove('visible');
});
