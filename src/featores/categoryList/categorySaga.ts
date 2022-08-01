import {call, put, takeLatest} from "redux-saga/effects";
import { ProductsListResponse } from "../../common/models/ProductsListResponse";
import { fetchList, fetchListError, fetchListSuccess } from "./categorySlice";
import { fetchAllCategory } from "./fetchAllCategory";

function* fetchListHandler() {
  try {
      const results: ProductsListResponse[] = yield call(fetchAllCategory);
      yield put(fetchListSuccess(results));
  } catch (error) {
      yield put(fetchListError());
  }
}

export function* watchFetchCategory() {
  yield takeLatest(fetchList.type, fetchListHandler);
}