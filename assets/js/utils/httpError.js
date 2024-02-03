export default class HttpError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}
