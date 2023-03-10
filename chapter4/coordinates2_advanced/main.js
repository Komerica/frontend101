const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

// π© 3. load
//   : HTMLλ‘ DOM νΈλ¦¬λ₯Ό λ§λλ κ² μμ±λμμ λΏλ§ μλλΌ
//     μ΄λ―Έμ§(image), μ€νμΌμνΈ(css), ν°νΈ(font) κ°μ μΈλΆ μμ(resources)λ λͺ¨λ λΆλ¬μ€λ κ²μ΄ λλ¬μ λ λ°μνλ€.
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
// π© Performance (μ±λ₯) μ²΄ν¬νλ λ°©λ²!
//  inspect -> Performance -> Record(Ctrl + e)
//  => λΉνν Layout Shift κ° λ³΄μ΄λ©΄ μμ’μκ²!

// π© κ°λ°ν΄ νλ νΈ(Tool palettes)
//    inspect -> Ctrl + Shift + P
//    π’ Show layout shift regions
//      : λ μ΄μμμ΄ μΌλ§λ λ°μνλμ§ μκ³  μΆμλ. (layout μ΄ λ§μ΄ λ°μνλ©΄ ν  μλ‘ μ±λ₯μ΄ μ μ’μκ²! (λλ μ΄λ°μ!))
//        λ μ΄μμμ΄ λ°μν λλ§λ€ νλμμΌλ‘ κΉλΉ‘μ!

// requests/response -> loading -> scripting -> rendering -> layout -> painting
// DOM    ==>    CSSOM    ==>   RenderTree   -> layout ==> paint ==> composition(Composite)
// ============= Construction ============== -> ========== Operation ===========
//                                                                   Composition(Composite) λ§ λ°μνλ©΄ κ°μ₯ BEST!
//                                                                     => Why? μ΄λ―Έ κ·Έλ¬μ Έμλ layers λ₯Ό μμ§μ΄κ±°λ λ³νλ§ νλ©΄λ¨!
//                                                                   paint κΉμ§λ okay..
//                                                                     => μμ layer λ , ν° layer λ , paint λ₯Ό λ€μ μ€λΉν΄μΌλΌμ μκ°μ΄ κ±Έλ¦¬κ³  λ©λͺ¨λ¦¬μ λΆλ΄μ΄ λ  μ μμ
//                                                                   But, layout μ΄ λ°μνλ©΄
//                                                                     => β μ μΌ μ΅μμ κ²½μ°. μ²μλΆν° render tree λ₯Ό κ³μ°ν΄μ λ€μ paint νκ³ , composite κΉμ§ κ°μΌνκΈ° λλ¬Έ