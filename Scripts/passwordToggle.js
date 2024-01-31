const pwTextTypeToggleBtnList = document.querySelectorAll('.pwTextTypeToggleBtn');


// 비밀번호 숨김 구현
function pwVisualTypeToggleBtnFeature(event) {
   if (!event.target.classList.contains('pwTextInputIsNotHidden')) {
      event.target.classList.add('pwTextInputIsNotHidden');
      event.target.previousElementSibling.setAttribute('type','text');   
      return
   } 
   event.target.classList.remove('pwTextInputIsNotHidden');
   event.target.previousElementSibling.setAttribute('type','password');
};


// 다중 토글 버튼 초기화 함수
export default function () {
   for (const btn of pwTextTypeToggleBtnList) {
      btn.addEventListener ('click', pwVisualTypeToggleBtnFeature)
   }
};
