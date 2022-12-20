const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target_img = document.querySelector('.target-img');
const coordinates = document.querySelector('.coordinates');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    target_img.style.left = `${x}px`;
    target_img.style.top = `${y}px`;
    coordinates.style.left = `${x}px`;
    coordinates.style.top = `${y}px`;
    coordinates.innerHTML = `${x}, ${y}`
});
