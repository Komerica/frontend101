const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

// 🟩 3. load
//   : HTML로 DOM 트리를 만드는 게 완성되었을 뿐만 아니라
//     이미지(image), 스타일시트(css), 폰트(font) 같은 외부 자원(resources)도 모두 불러오는 것이 끝났을 때 발생한다.
addEventListener('load', () => {
    const rect = target.getBoundingClientRect();
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        horizontal.style.transform = `translateY(${y}px)`;
        vertical.style.transform = `translateX(${x}px)`;
        target.style.transform = `translate(${x - halfWidth}px, ${y - halfHeight}px)`;
        tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
        tag.innerHTML = `x: ${x} y: ${y}`;
    });
});
// 🟩 Performance (성능) 체크하는 방법!
//  inspect -> Performance -> Record(Ctrl + e)
//  => 녹화후 Layout Shift 가 보이면 안좋은것!

// 🟩 개발툴 팔레트(Tool palettes)
//    inspect -> Ctrl + Shift + P
//    🟢 Show layout shift regions
//      : 레이아웃이 얼마나 발생하는지 알고 싶을때. (layout 이 많이 발생하면 할 수록 성능이 안 좋은것! (딜레이발생!))
//        레이아웃이 발생할때마다 파란색으로 깜빡임!

// requests/response -> loading -> scripting -> rendering -> layout -> painting
// DOM    ==>    CSSOM    ==>   RenderTree   -> layout ==> paint ==> composition(Composite)
// ============= Construction ============== -> ========== Operation ===========
//                                                                   Composition(Composite) 만 발생하면 가장 BEST!
//                                                                     => Why? 이미 그러져있는 layers 를 움직이거나 변형만 하면됨!
//                                                                   paint 까지도 okay..
//                                                                     => 작은 layer 든, 큰 layer 든, paint 를 다시 준비해야돼서 시간이 걸리고 메모리에 부담이 될 수 있음
//                                                                   But, layout 이 발생하면
//                                                                     => ↑ 제일 최악의 경우. 처음부터 render tree 를 계산해서 다시 paint 하고, composite 까지 가야하기 때문