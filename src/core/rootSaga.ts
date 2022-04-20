import { all } from "@redux-saga/core/effects";
import {watchFetchProducts} from "../featores/productsList/productsSaga";

export default function* rootSaga() {

    yield all([
        watchFetchProducts()
    ]);
};