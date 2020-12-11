import { handleActions } from 'redux-actions'

import {
  getAllPresentation,
  getAllPresentationSuccess,
  getAllPresentationFail,
} from '../actions/presentationAction'

let defaultState = {
  isLoadingAll: false,
  allPresentation: [],
  allSession: [],
  allSponsor: [],
  statistic: [],
  error: null,
}

const presentationReducer = handleActions(
  {
    [getAllPresentation]: (state) => {
      return {
        ...state,
        isLoadingAll: true,
      }
    },
    [getAllPresentationSuccess]: (state, { payload: { data } }) => {
      const { session, presentation, sponsor, stats } = data
      return {
        ...state,
        allSession: session,
        allSponsor: sponsor,
        allPresentation: presentation,
        statistic: stats,
        isLoadingAll: false,
      }
    },
    [getAllPresentationFail]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isLoadingAll: false
      }
    },
  },
  defaultState
)

export default presentationReducer