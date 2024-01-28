class FormState {
  static instance
  #data

  constructor(initialValue) {
    this.#data = initialValue
  }

  static getInstance(initialValue) {
    if (FormState.instance) return instance
    FormState.instance = new FormState(initialValue)
    return FormState.instance
  }

  get data() {
    return this.#data
  }

  set data({ name, value }) {
    this.#data[name] = value
  }
}

const initialValue = {
  email: "",
  password: "",
  passwordConfirm: "",
}
const formState = FormState.getInstance(initialValue)

export default formState
