import { createActions } from 'redux-actions'

export const {
  getAllPresentation,
  getAllPresentationSuccess,
  getAllPresentationFail,
} = createActions(
  'GET_ALL_PRESENTATION',
  'GET_ALL_PRESENTATION_SUCCESS',
  'GET_ALL_PRESENTATION_FAIL',
)