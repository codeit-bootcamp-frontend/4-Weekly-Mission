import HttpError from "./httpError.js"

export const requestHTTP = async (url, options) => {
  try {
    const response = await fetch(url, {
      method: options?.method || "GET",
      body: options?.body || null,
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) throw new HttpError("알 수 없는 오류가 발생했습니다.", response.status)

    const responseData = await response.json()
    return responseData
  } catch (error) {
    return {
      result: false,
      status: error.statusCode,
      message: error.message,
    }
  }
}
