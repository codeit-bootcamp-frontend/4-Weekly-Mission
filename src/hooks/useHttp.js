import { useCallback, useReducer } from "react"
import HttpError from "utils/httpError"
import * as Reducer from "reducer/http-reducer"

function useHttp() {
  const [state, dispatch] = useReducer(Reducer.httpReducer, Reducer.httpReducerInitialValues)

  const fetchRequest = useCallback(async (api) => {
    dispatch({ type: Reducer.httpActionType.PENDING })
    try {
      const response = await fetch(api)

      if (!response.ok) throw new HttpError(`알 수 없는 이유로 요청에 실패했습니다.`, 500)

      const responseData = await response.json()
      dispatch({ type: Reducer.httpActionType.SUCCESS, data: responseData })
    } catch (error) {
      dispatch({ type: Reducer.httpActionType.ERROR, message: error })
    }
  }, [])

  return {
    state,
    fetchRequest,
  }
}

export default useHttp
