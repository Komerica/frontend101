const button = document.querySelector('.button');
const rabbit = document.querySelector('#rabbit');
button.addEventListener('click', () => {
    // ✔ Method1
    // const top = rabbit.offsetTop;
    // const rect = rabbit.getBoundingClientRect();
    // console.log(top)        // 2599
    // console.log(rect.top);  // 2599
    // window.scroll({
    //     left: 0,
    //     top: top,
    //     behavior: 'smooth'
    // })
    // ✔ Method2
    rabbit.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
});