\* TODO - 1. 색상 팔레트 만들기

\* NOTE

- styled component 활용 예정
- theme provider 활용 예정
- theme.js 색상팔레트 저장

\* TODO - 2. 글로벌 네비게이션 생성

\* NOTE

- sticky 적용
- 버튼 공용컴포넌트로 생성
- 로고 절대경로로 설정하여 활용

\* TODO - 3. 랜딩 페이지 헤더 생성

\* NOTE

- 기본 페이지 UI 생성

\* TODO - 4. 랜딩 페이지 메인 생성

\* NOTE

- 기본 페이지 UI 생성

\* TODO - 5. 풋터 영역 생성

\* NOTE

- 기본 페이지 UI 생성

\* TODO - 6. reset.css 적용

\* NOTE

- styles 페이지에 createGlobalstyle로 생성
- styeld-reset에 요소를 추가하여 reset.css생성
- App.jsx 생성하여 전역적으로 적용

\* TODO - 7. Router 적용 및 themeProvider 적용

\* NOTE

- App.jsx 공통요소 네비게이션 풋터 제외하고 Outlet올 설정
- App.jsx themeProvider 적용
- Router.jsx 생성 패스 지정
- Root 컴포넌트에 지정

\* TODO - 8. Landing 페이지 세부작업 - 네비게이션

\* NOTE

- GlobalStyle.jsx 기본 페이지 전역 스타일 지정
- display theme로 세팅

\* TODO - 9. Landing 페이지 세부작업 - 헤더

\* NOTE

- gradients theme로 추가
- fonts theme로 추가

\* TODO - 10. Landing 페이지 세부작업 - 메인

\* NOTE

- 반복요소 map 활용하여 배열로 처리
- 기본 ui 구현

\* TODO - 11. Landing 페이지 세부작업 - 풋터

\* NOTE

- 기본 ui 구현

\* TODO - 12. Landing 링크연결

\* NOTE

- 외부링크 constants로 지정
- Link 이용하여 내부 링크 연결

\* TODO - 13. Shared 페이지 생성 및 헤더 영역 데이터 연결

\* NOTE

- 라우터에 패스 연결
- API 데이터 연동

\* TODO - 14. Shared Main 작업 - SearchLink Input

\* NOTE

- Shared페이지에 Main 영역 생성
- SearchLink 컴포넌트 구현

\* TODO - 15. Shared Main 작업 - CardList 구현

\* NOTE

- CardList 구현
- Card 컴포넌트 생성 및 그리드 구현

\* TODO - 16. Shared Main 작업 - CardList 데이터 연동

\* NOTE

- CardList 데이터연동

\* TODO - 17. Shared Main 작업 - createAt 함수 적용

\* NOTE

- day.js 이용하여 createdAt관련 함수 적용
- utils에 함수 분리

\* TODO - 18. Shared 페이지 세부작업

\* NOTE

- 카드 컴포넌트 스타일 수정
- 호버시 이미지 확대

\* TODO - 19. Folder 페이지 작업 - 헤더

\* NOTE

- AddLInk 생성

\* TODO - 20. Folder 페이지 작업 - 메인 UI구현

\* NOTE

- edit toolbar 생성
- sort toolbar 생성
- 폴더에 추가 버튼 생성

\* TODO - 21. Folder 페이지 작업 - 데이터 연동

\* NOTE

- sort 폴더 영역 데이터 구현
- 전체 영역 카드리스트 구현
- folderd 영역 카드리스트 구현
- 데이터가 없는 페이지 구현

\* TODO - 21. Folder 페이지 세부 작업

\* NOTE

- 세부 ui 수정
- folder 카드 컴포넌트에 요소 추가

\* TODO - 22. 중간 리팩토링

\* NOTE

- 세부 ui 수정
- folder 카드 컴포넌트에 요소 추가

\* TODO - 23. 버튼 공용 컴포넌트 수정

\* NOTE

- 사이즈 props 추가
- 기본 ui 수정

\* TODO - 24. Landing페이지 Main Contnet 레이아웃 수정

\* NOTE

- 사이즈 props 추가
- 기본 ui 수정

\* TODO - 24. Lainding 페이지 마무리 작업

\* NOTE

- pc 사이즈 마무리
- 그라데이션 추가
- 링크 연결안된 부분 링크 연결

\* TODO - 24. Shared 페이지 마무리 작업

\* NOTE

- pc 사이즈 마무리
- 그라데이션 추가
- 링크 연결안된 부분 링크 연결

\* TODO - 25. Folder 페이지 마무리 작업

\* NOTE

- 폴더명 선택시 포커스 된 버튼 스타일 변경
- popover 추가
- kebab버튼 클릭시 popover 표시

\* TODO - 26. signin 페이지 생성

\* NOTE

- 기본ui생성

\* TODO - 27. signup 페이지 생성

\* NOTE

- 기본ui생성

\* TODO - 28. signin, signup 페이지 스타일 수정

\* NOTE

- 폼 부분 스타일 세부수정

\* TODO - 29. modal 생성

\* NOTE

- index.html에 id = modal 추가
- modalPortal.jsx 생성
- 유형에 맞는 모달 생성
- 각각의 파트에 연결
- 필요한 데이터 연결

\* TODO - 30. Landing 페이지 반응형 수정

\* NOTE

- 모바일 사이즈로 변경시 그리드 변경
- 폰트 크기와 굵기 분리해서 정리

\* TODO - 31. Navigation 반응형 적용

\* NOTE

- 네비게이션 반응형 수정
- folder 페이지에서 상단 고정 안되게 적용

\* TODO - 31. footer 반응형 적용

\* NOTE

- footer 반응형 적용

\* TODO - 32. shared페이지 반응형 적용

\* NOTE

- shared 페이지 반응형 적용
- 카드리스트에 링크 추가

\* TODO - 32. folder페이지 반응형 적용

\* NOTE

- action button 적용
- edit toolbar 전체 폳더 선택시 사라지게 적용
- 반응형 적용

\* TODO - 33. 타입스크립트 변경

\* NOTE

\* TODO - 34. 타입수정 및 데이터 주는 위치 변경

\* NOTE

- 잘못된 타입 인터페이스 수정
- 데이터 페이지 상단에서 전달하게 수정

\* TODO - 35. 타입수정 및 데이터 주는 위치 변경

\* NOTE

- 잘못된 타입 인터페이스 수정
- 데이터 페이지 상단에서 전달하게 수정
