# 기본 요청 사항
## 로그인
- [x] https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/sign-in”으로 { “email”: “test@codeit.com”, “password”: “sprint101” } POST 요청해서 성공 응답을 받으면 “/folder”로 이동합니다.
## 회원가입
- [x] 이메일 중복 확인은 “/api/check-email” POST 요청해서 확인합니다.(중복된 이메일 확인은 “test@codeit.com”을 활용해 주세요.)
- [ ] 유효한 회원가입 형식의 경우 “/api/sign-up” POST 요청하고 성공 응답을 받으면 “/folder”로 이동합니다.

# 심화 요청 사항
- [ ] 로그인/회원가입시 성공 응답으로 받은 accessToken을 로컬 스토리지에 저장합니다.
- [ ] 로그인/회원가입 페이지에 접근시 로컬 스토리지에 accessToken이 있는 경우 “/folder” 페이지로 이동합니다.