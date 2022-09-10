import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../core/store";
import {ProductsListResponse} from "../../common/models/ProductsListResponse";
import { Status } from "../../common/models/status";

type CategoryState = {
    status: Status;
    list: ProductsListResponse[];
}

const initialState: CategoryState = {
    status: `initial`,
    list:
        [],
}

const listSlice = createSlice({
    name: `category`,
    initialState,

    reducers: {
        fetchList: (state) => {
            state.status = `loading`;
        },
        fetchListSuccess: (state, {payload}: PayloadAction<ProductsListResponse[]>) => {
            state.status = `success`;
            state.list = payload;
        },
        fetchListError: (state) => {
            state.status = `error`
        },
    },
});

export const {
    fetchList,
    fetchListSuccess,
    fetchListError,
} = listSlice.actions;

export const selectList = (state: RootState) => state.category.list;
export const selectStatus = (state: RootState) => state.category.status;

export default listSlice.reducer;