const httpReducerMapping = {
  PENDING: (state) => ({ ...state, isLoading: true }),
  SUCCESS: (state, action) => ({ ...state, data: action.data, isLoading: false }),
  ERROR: (state, action) => ({ ...state, isLoading: false, hasError: action.message }),
}

export const httpActionType = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
}

export const httpReducer = (state, action) => httpReducerMapping[action.type](state, action) || state

export const httpReducerInitialValues = {
  data: null,
  isLoading: false,
  hasError: null,
}
