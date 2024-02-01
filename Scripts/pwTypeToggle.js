const pwTextTypeToggleBtnList = document.querySelectorAll('.pwTextTypeToggleBtn');


// 비밀번호 숨김 구현
function pwVisualTypeToggleBtn(e) {
   if (!e.target.classList.contains('pwTextInputIsNotHidden')) {
      e.target.classList.add('pwTextInputIsNotHidden');
      e.target.previousElementSibling.setAttribute('type','text');   
      return
   } 
   e.target.classList.remove('pwTextInputIsNotHidden');
   e.target.previousElementSibling.setAttribute('type','password');
};


// 다중 토글 버튼 초기화 함수
export default function () {
   for (const btn of pwTextTypeToggleBtnList) {
      btn.addEventListener ('click', pwVisualTypeToggleBtn)
   }
};