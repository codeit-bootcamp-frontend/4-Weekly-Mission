export interface HttpState {
  data: any
  isLoading: boolean
  hasError: boolean | null
}

enum HttpActionType {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

type ActionType = { type: keyof typeof HttpActionType; data?: any; message?: any }

type HttpReducerMappingType = {
  [key in HttpActionType]: (state: HttpState, action: ActionType) => HttpState
}

const httpReducerMapping: HttpReducerMappingType = {
  [HttpActionType.PENDING]: (state: HttpState) => ({ ...state, isLoading: true }),
  [HttpActionType.SUCCESS]: (state: HttpState, action) => ({ ...state, data: action.data, isLoading: false }),
  [HttpActionType.ERROR]: (state: HttpState, action) => ({ ...state, isLoading: false, hasError: action.message }),
}

export const httpActionType = {
  PENDING: HttpActionType.PENDING,
  SUCCESS: HttpActionType.SUCCESS,
  ERROR: HttpActionType.ERROR,
}

export const httpReducer = (state: HttpState, action: ActionType) =>
  httpReducerMapping[action.type](state, action) || state

export const httpReducerInitialValues = {
  data: null,
  isLoading: false,
  hasError: null,
}
