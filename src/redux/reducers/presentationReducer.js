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
  allSponsorByRank: {},
  statistic: [],
  allMajor: [],
  sessionDic: {},
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
      const { session, presentation, sponsor, stats, major } = data
      let sessionDic = { }
      session.forEach(element => {
        sessionDic[element.sessionId] = element
      });
      return {
        ...state,
        allSession: session,
        allSponsorByRank: sponsor,
        allPresentation: presentation,
        statistic: stats,
        isLoadingAll: false,
        allMajor: major,
        sessionDic
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