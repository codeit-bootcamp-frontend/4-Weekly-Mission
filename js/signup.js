import * as signFunction from './signup-function.js';
import * as variable from './variable.js';

variable.signForm.children[0].children[0].children[1].addEventListener('focusout', signFunction.emailValidation);

variable.signForm.children[0].children[1].children[1].addEventListener('focusout', signFunction.passwordValidation);

variable.signForm.children[0].children[2].children[1].addEventListener('focusout', signFunction.passwordChecking);

variable.signForm.addEventListener('submit', signFunction.signFormValidation);

variable.signForm.children[0].children[1].children[2].addEventListener('click', signFunction.eyeImgChange);

variable.signForm.children[0].children[2].children[2].addEventListener('click', signFunction.eyeImgChange2);