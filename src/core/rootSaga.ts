import { all } from "@redux-saga/core/effects";
import {watchFetchProducts} from "../featores/Homepage/AllProducts/productsSaga";
import {watchFetchCategories} from "../common/topBar/TopBar/TopBarSaga";
import { watchFetchCategory } from "../featores/categoryList/categorySaga";

export default function* rootSaga() {

    yield all([
        watchFetchProducts(),
        watchFetchCategories(),
        watchFetchCategory(),
    ]);
};