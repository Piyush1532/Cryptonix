import { createSlice } from '@reduxjs/toolkit'

const initialState={
    allCryptoCoin:[],
    cryptocoinData:null,
    cryptocoinRecords:null,
    currency:{name:"usd",symbol:"$"}
}


const coinSlice=createSlice({
    name:"cryptoCoins",
    initialState,
    reducers:{
        allCoins(){},
        setAllCryptoCoin(state,action){
state.allCryptoCoin=action.payload
        },
       specificCoinData:()=>{},
        setspecificCryptoCoinData(state,action){
state.cryptocoinData=action.payload
        },
        setCryptoCoinRecords(state,action){
state.cryptocoinRecords=action.payload
        },
        setCurrency(state,action){
            state.currency=action.payload
        }
    }
})


export const {setAllCryptoCoin,setspecificCryptoCoinData,setCryptoCoinRecords,setCurrency,allCoins,specificCoinData}=coinSlice.actions;

export default coinSlice.reducer;