export const viewWarningText = (target, message) => {
    const inputBox = target.parentNode.querySelector('input');
    target.textContent = message;
    target.style.visibility = "visible";
    inputBox.classList.add('warning-input')
}

export const hiddenWarningText = (target) => {
    const inputBox = target.parentNode.querySelector('input');
    target.style.visibility = "hidden";
    inputBox.classList.remove('warning-input')
}

export const checkEmail = (value) => {
    const regex = new RegExp('[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(value === '') return 0;
    if(!regex.test(value)) return 1;
    return 2;
}

export const checkPassword = (value) => {
    if(value === '') return 0;
    return 2;
}

export const visiblePassword = (target) => {
    const el = target.parentNode.querySelector('input');
    const flag = JSON.parse(el.getAttribute('visible'));
    if(flag) {
        el.setAttribute('visible', 'false');
        target.src = '../images/eye-off.png';
        el.type = 'password';
    }
    else {
        el.setAttribute('visible', 'true');
        target.src = '../images/eye-on.png';
        el.type = 'text';
    }
}