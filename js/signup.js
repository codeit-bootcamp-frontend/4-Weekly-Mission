import * as signFunction from './signup-function.js';
import * as variable from './variable.js';

variable.email.addEventListener('focusout', signFunction.emailValidation);

variable.password.addEventListener('focusout', signFunction.passwordValidation);

variable.passwordCheck.addEventListener('focusout', signFunction.passwordChecking);

variable.signForm.addEventListener('submit', signFunction.signFormValidation);

variable.eyeButton.addEventListener('click', signFunction.eyeImgChange);

variable.eyeButton2.addEventListener('click', signFunction.eyeImgChange2);