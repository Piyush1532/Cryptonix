import { takeLatest } from 'redux-saga/effects';
import { allCoins, specificCoinData } from '../coinSlice';
import { allCryptoCoinHandler, cryptoCoinDataHandler } from './coinHandler';


export function* allCryptoCoinWatcher(){
    yield takeLatest(allCoins.type,allCryptoCoinHandler)
  
}

export function* coinDataWatcher(){
    yield takeLatest(specificCoinData.type,cryptoCoinDataHandler)
}