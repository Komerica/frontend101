const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
});