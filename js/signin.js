import * as signFunction from './sign-function.js';
import * as variable from './variable.js';

variable.email.addEventListener('focusout', signFunction.emailValidation);

variable.password.addEventListener('focusout', signFunction.passwordValidation);

variable.signForm.addEventListener('submit', signFunction.signFormValidation);

variable.eyeButton.addEventListener('click', signFunction.eyeImgChange);