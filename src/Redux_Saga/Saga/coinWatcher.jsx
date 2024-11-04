import { takeLatest } from 'redux-saga/effects';
import { allCoins, coinRecords, specificCoinData } from '../coinSlice';
import { allCryptoCoinHandler, cryptoCoinDataHandler, cryptocoinRecordHandler } from './coinHandler';


export function* allCryptoCoinWatcher(){
    yield takeLatest(allCoins.type,allCryptoCoinHandler)
  
}

export function* coinDataWatcher(){
    yield takeLatest(specificCoinData.type,cryptoCoinDataHandler)
}

export function * coinRecordWatcher(){
    yield takeLatest(coinRecords.type,cryptocoinRecordHandler)
}