import { call, put, takeLatest } from 'redux-saga/effects'
import { get } from 'lodash'

import restConnector from '../../connectors/RestConnector'

import {
  getAllPresentation,
  getAllPresentationSuccess,
  getAllPresentationFail, 
} from '../actions/presentationAction'

import { statisticNameList } from '../../constants/constants'

function* getAllPresentationSaga() {
  try {
    const getAllPresentationUrl = '/presentations/getAllData'
    const response = yield call(restConnector.get, getAllPresentationUrl)
    const data = get(response, 'data.data', {})
    
    let sessionList = get(data, 'session', [])
    sessionList = sessionList.map((session, index) => {
      return ({
        ...session,
        // name: `Session ${index + 1}`
      })
    })

    let statsList = get(data, 'statis', [])
    statsList = statisticNameList.map(field => {
      return ({
        ...field,
        value: statsList[field.key] || 0,
      })
    })

    let sponsorList = get(data, 'sponsor', [])
    let sponsorByRank = {}
    sponsorList.forEach(sponsor => {
      if (!(sponsor.type in sponsorByRank)) {
        sponsorByRank[sponsor.type] = []
      }
      sponsorByRank[sponsor.type].push(sponsor)
    })

    yield put(getAllPresentationSuccess({ data: {
      ...data,
      session: sessionList,
      stats: statsList,
      sponsor: sponsorByRank,
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