

//타켓 input 에러 클래스 추가 여부
function dicideAddErrorClass(target, message) {

    const inputClass = target.classList;
    return message !== '' ? inputClass.add('error') : inputClass.remove('error');
}

//비밀번호 표시 아이콘 이벤트

function eyeIconClickEvent(e) {
    
    if (e.target.tagName === 'BUTTON') {
        const eyeImg = e.target.firstElementChild;
        eyeImg.classList.toggle('show');
        eyeImg.src = isIncludeClassName(eyeImg, 'show') ? './img/eye-on.svg' : './img/eye-off.svg';
        const input = e.target.previousElementSibling;
        input.type = isIncludeClassName(eyeImg, 'show') ? 'text' : 'password';

    } else {
        const eyeImg = e.target;
        eyeImg.classList.toggle('show');
        eyeImg.src = isIncludeClassName(eyeImg, 'show')  ? './img/eye-on.svg' : './img/eye-off.svg';
        const input = e.target.offsetParent.previousElementSibling;
        input.type = isIncludeClassName(eyeImg, 'show')  ? 'text' : 'password';
    }

}


//로컬스토리지에 accessToken값 확인 여부
function checkAccessHistory() {
    const token = localStorage.getItem('accessToken');
    if (token !== null) {
        window.location = '/folder.html';
    }
}

//비어있는 input 판별
const isEmptyInput = (value) => value === '';

//해당 요소 클래스이름 포함 여부
const isIncludeClassName = (target ,name) => target.classList.contains(name);


export { dicideAddErrorClass, eyeIconClickEvent, checkAccessHistory, isEmptyInput }


