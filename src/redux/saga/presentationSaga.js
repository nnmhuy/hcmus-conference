import { call, put, takeLatest } from 'redux-saga/effects'

import {
  getPresentationList,
  getPresentationListSuccess,
  getPresentationListFail,
} from '../actions/presentationAction'

import { presentationList } from '../../constants/constants'

function* getPresentationListSaga({ payload }) {
  try {
    const { filter } = payload
    // TODO: call api or filter here
    // const response = yield call(restConnector.post, getStudentInfosUrl, { student_ids: [id] })

    yield put(getPresentationListSuccess({ presentationList }))
  } catch (error) {
    yield put(getPresentationListFail(error))
  }
}

function* getPresentationListWatcher() {
  yield takeLatest(getPresentationList, getPresentationListSaga)
}

export {
  getPresentationListWatcher,
}