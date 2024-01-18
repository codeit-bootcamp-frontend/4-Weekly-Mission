const inputEmail = document.querySelector(".input-email");
// const inputPassword = document.querySelector(".input-password");

// console.log(inputEmail.value, inputPassword.value);

// input 입력 값 가져오기.

class FormInput {
  constructor(inputElem) {
    this.inputElem = inputElem;
    this.attach();
  }

  eventHandler(event) {
    const isValid = this.emailValidate(event.target.value);

    if (!isValid) {
      const inputRootElem = document.querySelector(".input-layout-email");
      inputRootElem.classList.add("invalid");
    }
  }

  emailValidate(value) {
    return value.trim().length !== 0;
  }

  attach() {
    this.inputElem.addEventListener("focusout", this.eventHandler.bind(this));
  }
}

// class FormValidation extends FormInput {
//   constructor(inputElem) {
//     super(inputElem);

//     this.validate();
//   }

//   validate() {
//     console.log(this.value);
//   }
// }

new FormInput(inputEmail);
