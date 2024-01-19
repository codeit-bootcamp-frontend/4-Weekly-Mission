class State {
  _state
  constructor() {
    this._state = { email: "", password: "" }
  }
}

class FormState extends State {
  get getState() {
    return { ...this._state }
  }

  set setState({ prop, value }) {
    this._state[prop] = value
  }
}

const formState = new FormState()

export default formState
