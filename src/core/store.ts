import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import listReducer from '../featores/Homepage/AllProducts/productsSlice';
import categoriesReducer from '../common/topBar/TopBar/TopBarSlice'
import {useDispatch} from "react-redux";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        list: listReducer,
        categories: categoriesReducer,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()