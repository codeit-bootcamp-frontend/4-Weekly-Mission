# index.html 요구사항
- “로그인”은 클릭 시 로그인 페이지(‘/signin’)로 이동 합니다.
- “링크 추가하기”는 클릭 시 회원가입(‘/signup’)로 이동 합니다.
- 랜딩 페이지의 url path는 루트(‘/’) 입니다. 
- title은 Linkbrary로 설정해 주세요. 클릭으로 기능이 동작해야 하는 경우, 사용자가 클릭할 수 있는 요소임을 알 수 있도록 cursor: pointer를 설정해 주세요. 
- Linkbrary 아이콘은 클릭 시 루트 페이지(‘/’)로 이동 합니다. 
- 화면의 너비가 1920px 이상이면 하늘색 배경색은 너비를 꽉 채우도록 채워지고, 내부 요소들의 위치는 고정되고, 여백만 커지도록 해주세요. 
- 화면의 너비가 1920px 보다 작아질 때, “Linkbrary” 로고의 왼쪽 여백 200px “로그인" 버튼의 오른쪽 여백 200px이 유지되고, 화면의 너비가 작아질수록 두 요소간 거리가 가까워져야 합니다. 
- 아래로 스크롤 해도 “Linkbrary” 로고와 “로그인” 버튼이 있는 상단 네비게이션 바(Global Navigation Bar)가 최상단에 고정되게 해주세요.
- 화면의 너비가 1920px 이상이면 내부에 있는 요소간 동일한 간격을 유지하며 가운데 정렬해야 합니다. 
- 화면의 너비가 1920px 보다 작아질 때, 최하단에 있는 “codeit-2023”의 왼쪽 여백 104px과 SNS 아이콘들의 오른쪽 여백 104px을 유지하면서 가운데 있는 “Privacy Policy”, “FAQ” 요소와 각각 동일한 간격을 유지하며 가까워져야 합니다.
- “Privacy Policy”, “FAQ”는 클릭 시 각각 Privacy 페이지(‘/privacy’), FAQ 페이지(‘/faq’)로 이동 합니다.
- 페이스북, 트위터, 유튜브, 인스타그램 아이콘은 클릭 시 각각의 홈페이지로 새로운 창이 열리면서 이동 합니다.

# index.html 구조
- 전체 박스 : .landing
- 전체 내용 : .contents

## 전체 내용

### 1.header
#### top
- 로고 이미지 : .logo
- 로그인 버튼 : .login

### 2.section
#### content-1
- 제목 : h1
- 링크 추가 버튼 : .plus
- 메인 이미지 : .main-img

#### content-2
- 텍스트 부분 : .text
  - 부제목 : h2 (강조부분은 span)
  - 본문 : .description
- 이미지 부분 : .img-area
  - card1
  - card2
  - card3
- 다운로드 이미지 : .download

#### content-3
- 이미지 부분 : .img-area
  - 폴더 이름 변경하기 이미지 : .change
- 텍스트 부분: .text
  - 부제목 : h2 (강조부분은 span)
  - 본문 : .description

#### content-4
- 텍스트 부분 : .text
  - 부제목 : h2 (강조부분은 span)
  - 본문 : .description
- 이미지 부분 : .img-area
  - 뒷부분 메인 이미지 : .backmain-img
  - 앞부분 공유하기 이미지 : .share

#### content-5
- 이미지 부분 : .img-area
  - 검색하기 이미지 : .search
- 텍스트 부분 : .text
  - 부제목 : h2 (강조부분은 span)
  - 본문 : .description

### 3.footer
#### bottom
- 저작권 : .copyright
- 텍스트 부분 : .text
  - Privacy Policy : .left
  - FAQ : .right
- 아이콘 부분 : .icons

# signin.html 요구사항
# signin.html 구조
## 전체 내용

# signup.html 요구사항
# signup.html 구조
## 전체 내용


### 전체적인 코드 의문점
1. position
랜딩페이지(=메인페이지) header를 픽스하기위해 position : fixed를 사용.
footer도 header처럼 만들고 싶음.
fixed와 absolute는 조상을 따라가는 성질을 이용하여 footer에 position : absolute를 넣었는데 맞는 코드인가?

2. focus
로그인페이지의 비밀번호 input에 눈모양 이미지가 있어서 input과 img를 div를 묶고, 아이디 input처럼 css를 주어 꾸밈.
focus를 적용하니 input에 바로 넣으면 되는 아이디부분은 바로 적용가능하나, 비밀번호부분은 input이 아니라 .pwtext에 넣어야하는 상황이라서 잘 적용이 안됨.(일단은 focus-within 사용)

3. 반응형 footer
pc, 테블릿일땐 일직선상인데, 모바일일떈 copyright부분이 하단으로 내려가게 구현.
hidden이나 none을 사용했지만 완벽하게 성공하지 못함.