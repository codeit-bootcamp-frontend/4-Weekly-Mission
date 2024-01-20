class FormState {
  #state
  constructor() {
    this.#state = { email: "", password: "" }
  }

  get getState() {
    return { ...this.#state }
  }

  set setState({ prop, value }) {
    this.#state[prop] = value
  }
}

const formState = new FormState()

export default formState
