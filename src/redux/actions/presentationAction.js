import { createActions } from 'redux-actions'

export const {
  getPresentationList,
  getPresentationListSuccess,
  getPresentationListFail,
} = createActions(
  'GET_PRESENTATION_LIST',
  'GET_PRESENTATION_LIST_SUCCESS',
  'GET_PRESENTATION_LIST_FAIL',
)