import { all } from 'redux-saga/effects';

import {
  getAllPresentationWatcher,
} from './presentationSaga'

export default function* rootSaga() {
  yield all([
    // presentation
    getAllPresentationWatcher(),
  ]);
}