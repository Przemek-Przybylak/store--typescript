import {call, put, takeLatest} from "redux-saga/effects";
import {fetchList, fetchListError, fetchListSuccess} from "./productsSlice";
import {apiConect} from "../../common/apiConnect";

function* fetchListHandler() {
    try {
        const products: {} = yield call(apiConect, "");
        yield put(fetchListSuccess(products));
    } catch (error) {
        yield put(fetchListError());
    }
}

export function* watchFetchProducts() {
    yield takeLatest(fetchList.type, fetchListHandler);
}