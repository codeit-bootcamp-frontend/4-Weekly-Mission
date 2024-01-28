import * as signFunction from './sign-function.js';
import * as variable from './variable.js';

variable.signForm.children[0].children[0].children[1].addEventListener('focusout', signFunction.emailValidation);

variable.signForm.children[0].children[1].addEventListener('focusout', signFunction.passwordValidation);

variable.signForm.addEventListener('submit', signFunction.signFormValidation);

variable.signForm.children[0].children[1].children[2].addEventListener('click', signFunction.eyeImgChange);