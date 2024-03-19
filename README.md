# css 적용
- [x] css 적용 방식을 선택한다. (css in js vs tailwind)
  -[x] 테일윈드의 경우, 컴포넌트 단위부터 조금씩 바꾼다.

# app Router 적용
- [x] 앱 라우터를 적용한다.
  - [x] pages를 제거한다.
  - [x] pages의 _app.tsx, _documents.tsx 내용은 app/layout.tsx로 이전한다.
  - [x] pages의 index.tsx는 app/page.tsx에 이전한다.
  - [x] styles를 제거한다.
- [x] 만약, pr 머지 충돌이 일어날 경우, 원격 저장소의 내용을 위와 같은 절차로 제거한다.