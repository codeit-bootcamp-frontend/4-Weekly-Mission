# 6주차 Weekly-Mission

### 📌 요구사항
### 🔎 기본 요구사항
#### 1.로그인 페이지 & 회원가입 페이지
- [x] https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/sign-in”으로 { “email”: “test@codeit.com”, “password”: “sprint101” } POST 요청해서 성공 응답을 받고 “/folder”로 이동하도록 설정 <br />
- [x] 이메일 input에서 “test@codeit.com”으로 “/api/check-email” 이메일 중복 확인 POST 요청하면 이메일 중복 에러를 확인할 수 있도록 설정 <br />
- [x] 유효한 회원가입 형식의 경우 “/api/sign-up” POST 요청하고 성공 응답을 받으면 “/folder”로 이동하도록 설정 <br />

### 🔎 심화 요구사항
- [x] 로그인/회원가입시 성공 응답으로 받은 accessToken을 로컬 스토리지에 저장 <br />
- [x] 로그인/회원가입 페이지에 접근시 로컬 스토리지에 accessToken이 있는 경우 “/folder” 페이지로 이동하도록 설정 <br />

