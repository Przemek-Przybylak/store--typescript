import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../core/store";
import {ProductsListResponse} from "../../../common/models/ProductsListResponse";
import { Status } from "../../../common/models/status";

type AllProductsState = {
    status: Status;
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
export const selectStatus = (state: RootState) => state.list.status;
export const selectListByQuery = (state: RootState, query: String | null) => {
    const list = selectList(state);
    if (!query || query.trim() === "") {
        return list;
    }
    return list.filter(({title}) => title.toUpperCase().includes(query.trim().toUpperCase()));
};

export default listSlice.reducer;