import { useCallback, useReducer } from "react"
import HttpError from "utils/httpError"
import * as Reducer from "reducer/http-reducer"

function useHttp() {
  const [state, dispatch] = useReducer(Reducer.httpReducer, Reducer.httpReducerInitialValues)

  const fetchRequest = useCallback(async (api, errorMapping) => {
    dispatch({ type: Reducer.httpActionType.PENDING })
    try {
      const response = await fetch(api)

      if (!response.ok) {
        const errorMessage = errorMapping[response.status] || errorMapping["500"]
        throw new HttpError(errorMessage)
      }

      const responseData = await response.json()
      dispatch({ type: Reducer.httpActionType.SUCCESS, data: responseData })
    } catch (error) {
      console.log(error)
      dispatch({ type: Reducer.httpActionType.ERROR, message: error })
    }
  }, [])

  return {
    state,
    fetchRequest,
  }
}

export default useHttp
