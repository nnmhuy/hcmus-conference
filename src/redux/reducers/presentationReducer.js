import { handleActions } from 'redux-actions'

import {
  getPresentationList,
  getPresentationListSuccess,
  getPresentationListFail,
} from '../actions/presentationAction'

let defaultState = {
  isLoading: false,
  presentationList: [],
  error: null,
}

const presentationReducer = handleActions(
  {
    [getPresentationList]: (state) => {
      return {
        ...state,
        isLoading: true,
      }
    },
    [getPresentationListSuccess]: (state, { payload: { presentationList } }) => {
      return {
        ...state,
        presentationList,
        isLoading: false,
      }
    },
    [getPresentationListFail]: (state, { payload: { error } }) => {
      return {
        ...state,
        error,
        isLoading: false
      }
    },
  },
  defaultState
)

export default presentationReducer