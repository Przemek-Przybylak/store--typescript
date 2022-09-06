import {call, put, takeLatest} from "redux-saga/effects";
import { ProductsListResponse } from "../../common/models/ProductsListResponse";
import { fetchProductDetails, fetchProductDetailsSuccess, fetchProductDetailsError } from "./productSlice";
import { fetchProduct } from "./fetchProduct";

function* fetchProductHandler() {
  try {
      const result: ProductsListResponse = yield call(fetchProduct);
      console.log(result)
      yield put(fetchProductDetailsSuccess(result));
  } catch (error) {
      yield put(fetchProductDetailsError());
  }
}

export function* watchFetchProduct() {
  yield takeLatest(fetchProductDetails.type, fetchProductHandler);
}