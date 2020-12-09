import { all } from 'redux-saga/effects';

import {
  getPresentationListWatcher,
} from './presentationSaga'

export default function* rootSaga() {
  yield all([
    // presentation
    getPresentationListWatcher(),
  ]);
}