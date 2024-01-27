// 타겟 input값 리턴함수
function returnInputValue(e){
    return e.target.value;
}


//타켓 input 에러 클래스 추가 여부
function addErrorClass(target, message){
    const inputClass = target.classList;
    return message !== '' ? inputClass.add('error') : inputClass.remove('error');
}

//비밀번호 표시 아이콘 이벤트
function eyeIconClickEvent(e){
    if(e.target.tagName === 'IMG'){
        e.target.classList.toggle('hidden')
        const input = e.target.parentNode.previousElementSibling;
        const imgSrc = e.target.classList.contains('hidden') ? './img/eye-off.svg' : './img/eye-on.svg';
        e.target.src = imgSrc;
        e.target.classList.contains('hidden') ? input.type = 'password' : input.type = 'text';
       
    }
}


export {returnInputValue,addErrorClass, eyeIconClickEvent}