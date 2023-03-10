// ๐ฉ Web APIs
//   : https://developer.mozilla.org/en-US/docs/Web/API

// ๐ฉ External APIs
//   : ํธ์ํฐ(Twitter), ํธ๋ ๋ก(Trello), ์ ํ๋ธ(Youtube), ํํฐ๋ ์คํธ(Pinterest), ๋ ์จ(Weather)

//          w i n d o w (Global object)
//       โ       โ      โ
//    DOM       BOM      JavaScript
// document   navigator   Array
//            location    Map
//             fetch      Date
//            storage
//   ๐ข Window
//      โ DOM(Document Object Model)
//      โ BOM(Browser Object Model)
//      โ JavaScript

// โ window ๋ global object ๋ผ์
//   console,log(innerWidth) ๋ผ๊ณ  ์ถ๋ ฅํด์ฃผ๋ฉด window ์ ๋๋น๊ฐ ๋์ด!
//   console.log(window.innerWidth) ๋ผ๊ณ  ํ๋ ๊ฒ๊ณผ ๋์ผ!

// ๐ฉ window.screen
//  : ๋ชจ๋ํฐ์ ํด์๋, ์ฆ, ๋ธ๋ผ์ฐ์  ๋ฐ๊นฅ์ ์๋ ์์ด๋ค๊น์ง ๋คํฉํ ๋ชจ๋ํฐ ์ฌ์ด์ฆ๋ฅผ ๋งํ๋ ๊ฒ!
// ๐ฉ window.outer
//  : URL, ํญ์ ํฌํจํ ๋ธ๋ผ์ฐ์ ์ ์ ์ฒด์ ์ธ ์ฌ์ด์ฆ
// ๐ฉ window.inner
//  : ์คํฌ๋กค๋ฐ๊ฐ ์์ผ๋ฉด ๊ทธ ์คํฌ๋กค๋ฐ ์ ์ฒด๋ฅผ ํฌํจํ ์นํ์ด์ง
// ๐ฉ document.documentElement.clientWidth
//  : ์คํฌ๋กค๋ฐ๋ฅผ ์ ์ธํ ์คํฌ๋ฆฐ!