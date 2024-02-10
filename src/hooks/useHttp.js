import { useCallback, useReducer } from "react"
import HttpError from "../utils/httpError"

const reducer = (state, action) => {
  switch (action.type) {
    case "PENDING":
      return {
        ...state,
        isLoading: true,
      }

    case "SUCCESS":
      return {
        ...state,
        data: action.data,
        isLoading: false,
      }

    case "ERROR":
      return {
        ...state,
        isLoading: false,
        hasError: action.message,
      }

    default:
      return { ...state }
  }
}

const INITIAL_VALUES = {
  data: null,
  isLoading: false,
  hasError: null,
}

function useHttp() {
  const [state, dispatch] = useReducer(reducer, INITIAL_VALUES)

  const fetchRequest = useCallback(async (api) => {
    dispatch({ type: "PENDING" })
    try {
      const response = await fetch(api)

      if (!response.ok) throw new HttpError("알 수 없는 이유로 요청에 실패했습니다.", 500)

      const responseData = await response.json()
      dispatch({ type: "SUCCESS", data: responseData })
    } catch (error) {
      dispatch({ type: "ERROR", message: error })
    }
  }, [])

  return {
    state,
    fetchRequest,
  }
}

export default useHttp
