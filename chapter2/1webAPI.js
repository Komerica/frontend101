// 🟩 Web APIs
//   : https://developer.mozilla.org/en-US/docs/Web/API

// 🟩 External APIs
//   : 트위터(Twitter), 트렐로(Trello), 유튜브(Youtube), 핀터레스트(Pinterest), 날씨(Weather)

//          w i n d o w (Global object)
//       ↙       ↓      ↘
//    DOM       BOM      JavaScript
// document   navigator   Array
//            location    Map
//             fetch      Date
//            storage
//   🟢 Window
//      ✔ DOM(Document Object Model)
//      ✔ BOM(Browser Object Model)
//      ✔ JavaScript

// → window 는 global object 라서
//   console,log(innerWidth) 라고 출력해주면 window 의 너비가 나옴!
//   console.log(window.innerWidth) 라고 하는 것과 동일!

// 🟩 window.screen
//  : 모니터의 해상도, 즉, 브라우저 바깥에 있는 아이들까지 다합한 모니터 사이즈를 말하는 것!
// 🟩 window.outer
//  : URL, 탭을 포함한 브라우저의 전체적인 사이즈
// 🟩 window.inner
//  : 스크롤바가 있으면 그 스크롤바 전체를 포함한 웹페이지
// 🟩 document.documentElement.clientWidth
//  : 스크롤바를 제외한 스크린!