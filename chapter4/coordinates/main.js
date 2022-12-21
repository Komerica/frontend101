const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target_img = document.querySelector('.target-img');
const coordinates = document.querySelector('.coordinates');
const targetRect = target_img.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    // ↓ ↓ top/left 를 사용했기 때문에 layout, paint, composite 까지 발생함!
    //     https://www.lmame-geek.com/css-triggers/ - CSS Trigger 참고!
    //     가장 좋은 시나리오는 composite 만 바뀌는 것!
    //     So, transform: translate 을 이용하여 composite 만 발생할 수 있도록 만드는 것이 성능면에서 좋음!!
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    // ↑ ↑ 성능적으로 개선된 코드
    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    target_img.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
    // ↑ ↑ 성능적으로 개선된 코드
    // target_img.style.left = `${x}px`;
    // target_img.style.top = `${y}px`;
    coordinates.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
    // coordinates.style.left = `${x}px`;
    // coordinates.style.top = `${y}px`;
    coordinates.innerHTML = `${x}, ${y}`
});
