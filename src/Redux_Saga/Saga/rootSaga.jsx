import { all } from 'redux-saga/effects';
import { allCryptoCoinWatcher, coinDataWatcher } from './coinWatcher';

export function* rootSaga() {
    yield all([allCryptoCoinWatcher(),coinDataWatcher()])
}