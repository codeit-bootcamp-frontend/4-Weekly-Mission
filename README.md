# 코드잇 8주차 미션

7주차에 했던 전통방식의 CSS들을 styled-components로 변경을 했다.
나는 개인적으로 styled-components를 별로 안좋아한다... 컴포넌트 파일 자체가 커지는게 싫었다.
그래서 styled-components에 대해 막 찾아봤는데 내가 알던것과는 다르게 스타일들을 분리할 수 있었다.
생각해보니 styled-components도 결국은 값이다. 값으로 평가되는데 export가 안 될 이유가 없다.

나는 styled-components를 이렇게 사용했다.

- 👉 styles폴더를 만들어서 전역적인 스타일들을 관리하자. (굳이 styles 폴더인데 style.js를 붙인이유는 import할 때에도 명확함을 주기 위해서다.)
- 👉 styled-reset 라이브러리를 사용해 브라우저마다 차이가 있는 스타일을 맞춰주었다.
- 👉 컴포넌트에 스타일을 추가하지말고 컴포넌트명.style.js 라는 파일을 만들어 import 하자.
- 👉 S-Dot을 사용하자.

- ❗️createGlobalStyle로 폰트를 설정하면 리랜더링시에 폰트를 계속 다운받는 이슈가 있다. (폰트는 따로 css파일로 import해서 불러오자.)
