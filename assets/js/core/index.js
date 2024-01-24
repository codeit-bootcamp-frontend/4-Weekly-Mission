class FormState {
  #state
  constructor() {
    this.#state = {
      email: { result: false, value: "", message: null, type: null },
      password: { result: false, value: "", message: null, type: null },
    }
  }

  get getState() {
    return { ...this.#state, email: { ...this.#state.email }, password: { ...this.#state.password } }
  }

  set setState({ result, value, message, type }) {
    this.#state[type].type = type
    this.#state[type].value = value
    this.#state[type].result = result
    this.#state[type].message = message
  }
}

const formState = new FormState()

export default formState
