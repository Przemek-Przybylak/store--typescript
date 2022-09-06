import { all } from "@redux-saga/core/effects";
import {watchFetchProducts} from "../featores/Homepage/AllProducts/productsSaga";
import {watchFetchCategories} from "../common/topBar/TopBar/TopBarSaga";
import { watchFetchCategory } from "../featores/categoryPage/categorySaga";
import { watchFetchProduct } from "../featores/productPage/productSaga";

export default function* rootSaga() {

    yield all([
        watchFetchProducts(),
        watchFetchCategories(),
        watchFetchCategory(),
        watchFetchProduct(),
    ]);
};