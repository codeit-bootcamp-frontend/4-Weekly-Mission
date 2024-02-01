import {MASTER_ACCOUNT, REGEX, ERROR_MSG, ERROR_MESSAGE_V2, $} from './constants.js';

const addErrorToDuplicateInput = (e) => {
    const errorMsg = $('.input-error-msg', e.target.parentNode);
    if(e.target.value === MASTER_ACCOUNT.EMAIL)
    {
        e.target.classList.add('js-input-profile-error');
        errorMsg.classList.remove('js-display-none');
        errorMsg.textContent = ERROR_MESSAGE_V2.EMAIL.DUPLICATE;
    }
    else {
        e.target.classList.remove('js-input-profile=input');
        errorMsg.classList.add('js-display-none');
    }
}
    