import { all } from 'redux-saga/effects';
import { allCryptoCoinWatcher, coinDataWatcher ,coinRecordWatcher} from './coinWatcher';

export function* rootSaga() {
    yield all([allCryptoCoinWatcher(),coinDataWatcher(),coinRecordWatcher()])
}