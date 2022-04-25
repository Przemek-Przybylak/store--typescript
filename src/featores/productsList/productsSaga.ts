import {call, put, takeLatest} from "redux-saga/effects";
import {fetchList, fetchListError, fetchListSuccess} from "./productsSlice";
import {fetchAllProducts} from "./fetchAllProducts.";
import {ProductsListResponse} from "./models/ProductsListResponse";

function* fetchListHandler() {
    try {
        const results: ProductsListResponse[] = yield call(fetchAllProducts);
        yield put(fetchListSuccess(results));
    } catch (error) {
        yield put(fetchListError());
    }
}

export function* watchFetchProducts() {
    yield takeLatest(fetchList.type, fetchListHandler);
}