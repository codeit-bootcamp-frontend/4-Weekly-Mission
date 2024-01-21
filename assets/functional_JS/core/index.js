export default function FormState() {
  const data = {
    values: { email: "", password: "" },
    errorElements: { email: null, password: null },
  }

  return {
    getData() {
      return { ...data, values: { ...data.values }, errorElements: { ...data.errorElements } }
    },

    getValues() {
      return { ...data.values }
    },

    setValues(name, value) {
      return (data.values[name] = value)
    },

    getErrorElements() {
      return { ...data.errorElements }
    },

    setErrorElements(name, value) {
      return (data.errorElements[name] = value)
    },
  }
}
