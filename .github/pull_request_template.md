## 요구사항

### 기본

- [x] [기본/로그인 페이지] https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/sign-in”으로 { “email”: “test@codeit.com”, “password”: “sprint101” } POST 요청해서 성공 응답을 받고 “/folder”로 이동하나요?

- [x] [기본/회원가입 페이지] 이메일 input에서 “test@codeit.com”으로 “/api/check-email” 이메일 중복 확인 POST 요청하면 이메일 중복 에러를 확인할 수 있나요?

- [x] [기본/회원가입 페이지] 유효한 회원가입 형식의 경우 “/api/sign-up” POST 요청하고 성공 응답을 받으면 “/folder”로 이동하나요?

### 심화

- [ ] [심화] 로그인/회원가입시 성공 응답으로 받은 accessToken을 로컬 스토리지에 저장했나요?

- [ ] [심화] 로그인/회원가입 페이지에 접근시 로컬 스토리지에 accessToken이 있는 경우 “/folder” 페이지로 이동하나요?

## 주요 변경사항

- signin.js : 로그인 api 추가
- signup.js : 중복 이메일 체크 api, 유효한 회원가입 형식 체크 api 추가

## 스크린샷

## 멘토에게

심화 해보려했는데... response에서 데이터를 확인해봤는데 accessToken이 없었습니다. 어떻게 확인해야되는지 모르겠어요.
그동안 감사했습니다. 다음에 또 봬요!
