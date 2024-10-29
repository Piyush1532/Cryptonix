import { call, put } from 'redux-saga/effects';
import { fetchallCryptoServices } from './coinServices.jsx';
import { setAllCryptoCoin, setspecificCryptoCoinData } from '../coinSlice.jsx';


export function* allCryptoCoinHandler(){
    try {
        const data=yield call(fetchallCryptoServices)
        yield put(setAllCryptoCoin(data))
    } catch (error) {
        console.log(error)
    }
}

export function*  cryptoCoinDataHandler(action){
    try {
        const data=yield call(fetchallCryptoServices ,action.payload)
        yield put(setspecificCryptoCoinData(data))
    } catch (error) {
     console.log(error)   
    }
}