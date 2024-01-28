class FormState {
  #data
  constructor(initialValue) {
    this.#data = initialValue
  }

  get data() {
    return this.#data
  }

  set data({ name, value }) {
    this.#data[name] = value
  }
}

const formState = new FormState({
  email: "",
  password: "",
  passwordConfirm: "",
})

export default formState
