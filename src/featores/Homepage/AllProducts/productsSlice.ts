import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../core/store";
import {ProductsListResponse} from "./models/ProductsListResponse";

type AllProductsState = {
    status: string;
    list: ProductsListResponse[];
}

const initialState: AllProductsState = {
    status: `initial`,
    list:
        []
}

const listSlice = createSlice({
    name: `allProducts`,
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