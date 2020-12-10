import { call, put, takeLatest } from 'redux-saga/effects'
import { get } from 'lodash'

import restConnector from '../../connectors/RestConnector'

import {
  getAllPresentation,
  getAllPresentationSuccess,
  getAllPresentationFail, 
} from '../actions/presentationAction'

import { sessionList, presentationList, statsList } from '../../constants/constants'

function* getAllPresentationSaga() {
  try {
    // const getAllPresentationUrl = '/presentation/getAllData'
    // const response = yield call(restConnector.get, getAllPresentationUrl)
    // const data = get(response, 'data', {})

    // yield put(getAllPresentationSuccess({ data }))
    yield put(getAllPresentationSuccess({ data: {
      session: sessionList,
      presentation: presentationList,
      statis: statsList
    } }))
  } catch (error) {
    yield put(getAllPresentationFail(error))
  }
}

function* getAllPresentationWatcher() {
  yield takeLatest(getAllPresentation, getAllPresentationSaga)
}

export {
  getAllPresentationWatcher,
}