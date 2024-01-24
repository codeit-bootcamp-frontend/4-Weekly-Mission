const passToggleBtn = document.querySelectorAll('.passToggleBtn')


// 비밀번호 숨김 구현
function passwordToggle(event) {
   if (event.target.classList.contains('notHidden')) {
     //비밀번호를 숨김
      event.target.classList.remove('notHidden')
      event.target.previousElementSibling.setAttribute('type','password')

   } else {
      event.target.classList.add('notHidden')
      event.target.previousElementSibling.setAttribute('type','text')
   }
}

// 다중 토글 버튼 초기화 함수

export default function toggleAssign() {
   for (let btn of passToggleBtn) {
      btn.addEventListener ('click', passwordToggle)
   }
}
