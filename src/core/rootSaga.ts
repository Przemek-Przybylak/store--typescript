import { all } from "@redux-saga/core/effects";
import {watchFetchProducts} from "../featores/productsList/productsSaga";
import {watchFetchCategories} from "../common/topBar/TopBar/TopBarSaga";

export default function* rootSaga() {

    yield all([
        watchFetchProducts(),
        watchFetchCategories()
    ]);
};