typescript 的 DOM 仅支持至少两个主要浏览器引擎支持的 API!
来自这里 --- “一项功能需要得到两个或更多主要浏览器引擎的支持才能包含在此处，以确保供应商之间达成良好共识：Gecko (Firefox)、Blink (Chrome/Edge) 和WebKit (Safari)。”
https://github.com/microsoft/TypeScript-DOM-lib-generator#why-is-my-fancy-api-still-not-available-here

仅一个浏览器引擎支持的API列表：
- useBattery
- useNetworkState
- useIdle

一些意义不大的API列表:
- useMap
- useSet
- useGeolocation 隐式非常重要
