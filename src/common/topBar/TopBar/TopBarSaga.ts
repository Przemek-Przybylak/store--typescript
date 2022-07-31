import {call, put, takeLatest} from "redux-saga/effects";
import {CategoriesResponse} from "../models/categoriesResponse";
import {fetchCategories} from "./fetchCategories";
import {fetchList, fetchListError, fetchListSuccess} from "./TopBarSlice";

function* fetchListHandler() {
    try {
        const results: CategoriesResponse[] = yield call(fetchCategories);
        yield put(fetchListSuccess(results));
    } catch (error) {
        yield put(fetchListError());
    }
}

export function* watchFetchCategories() {
    yield takeLatest(fetchList.type, fetchListHandler);
}