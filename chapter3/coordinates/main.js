const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    console.log(`x: ${x}, y: ${y}`);
    // ↓ ↓ top/left 를 사용했기 때문에 layout, paint, composite 까지 발생함!
    //     https://www.lmame-geek.com/css-triggers/ - CSS Trigger 참고!
    //     가장 좋은 시나리오는 composite 만 바뀌는 것!
    //     So, transform: translate 을 이용하여 composite 만 발생할 수 있도록 만드는 것이 성능면에서 좋음!!
    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML = `${x}px, ${y}px`;
});