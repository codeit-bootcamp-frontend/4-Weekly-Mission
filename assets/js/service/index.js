import * as AuthAPI from "../api/index.js"
import { requestHTTP } from "../utils/httpRequest.js"

class AuthService {
  constructor(api) {
    this.API = api
  }

  async isExistingEmail(email) {
    const responseData = await requestHTTP(this.API.CHECK_EMAIL, {
      method: "POST",
      body: JSON.stringify({ email }),
    })

    if ("result" in responseData) return true

    return false
  }

  async login(email, password) {
    return await requestHTTP(this.API.LOGIN, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
  }

  async register(email, password) {
    return await requestHTTP(this.API.REGISTER, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
  }

  getUserStorage() {
    return localStorage.getItem("user")
  }
}

const authService = new AuthService(AuthAPI)

export default authService
