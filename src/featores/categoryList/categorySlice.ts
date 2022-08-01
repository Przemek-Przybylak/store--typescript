import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../core/store";
import {ProductsListResponse} from "../../common/models/ProductsListResponse";

type CategoryState = {
    status: string;
    list: ProductsListResponse[];
}

const initialState: CategoryState = {
    status: `initial`,
    list:
        []
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
        }
    },
});

export const {
    fetchList,
    fetchListSuccess,
    fetchListError,
} = listSlice.actions;

export const selectList = (state: RootState) => state.list.list;

export default listSlice.reducer;