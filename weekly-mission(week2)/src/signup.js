import {MASTER_ACCOUNT, REGEX, ERROR_MESSAGE, $} from './constants.js';

const addErrorToDuplicateInput = (e) => {
    const errorMsg = $('.input-error-msg', e.target.parentNode);
    console.log(e.target.value);
    if(e.target.value === MASTER_ACCOUNT.EMAIL)
    {
        e.target.classList.add('js-input-profile-error');
        errorMsg.classList.remove('hidden');
        errorMsg.textContent = ERROR_MESSAGE.EMAIL.DUPLICATE;
    }
}

export { addErrorToDuplicateInput };
