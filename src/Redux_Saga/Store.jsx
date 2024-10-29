import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import coinSlice from "./coinSlice.jsx"
import { rootSaga } from './Saga/rootSaga.jsx';
const sagaMiddleware = createSagaMiddleware();

const rootReducer=combineReducers({
    coin:coinSlice
})

const store=configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)


export default store