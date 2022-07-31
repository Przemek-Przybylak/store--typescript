import { all } from "@redux-saga/core/effects";
import {watchFetchProducts} from "../featores/Homepage/AllProducts/productsSaga";
import {watchFetchCategories} from "../common/topBar/TopBar/TopBarSaga";

export default function* rootSaga() {

    yield all([
        watchFetchProducts(),
        watchFetchCategories()
    ]);
};