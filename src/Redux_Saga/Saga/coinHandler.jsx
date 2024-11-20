import { call, put } from 'redux-saga/effects';
import { fetchallCryptoServices, fetchCryptoCoinDataServices, fetchcryptocoinRecordsServices } from './coinServices.jsx';
import { setAllCryptoCoin, setCryptoCoinRecords, setspecificCryptoCoinData } from '../coinSlice.jsx';


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
        const data=yield call(fetchCryptoCoinDataServices ,action.payload)
        yield put(setspecificCryptoCoinData(data))
    } catch (error) {
     console.log(error)   
    }
}



export function* cryptocoinRecordHandler(action){
try {
    const { coinId, historicRecord } = action.payload;
  
    const data =yield call
    (fetchcryptocoinRecordsServices,coinId,historicRecord)
    yield put(setCryptoCoinRecords(data))
} catch (error) {
    console.log(error)
}
}