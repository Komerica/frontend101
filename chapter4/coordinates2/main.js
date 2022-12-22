const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const rect = target.getBoundingClientRect();
const halfWidth = rect.width / 2;
const halfHeight = rect.height / 2;
window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    target.style.transform = `translate(${x - halfWidth}px, ${y - halfHeight}px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML = `x: ${x} y: ${y}`;
});