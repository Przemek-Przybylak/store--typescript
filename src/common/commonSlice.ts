import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../core/store";
import { ProductsListResponse } from "./models/ProductsListResponse";
import { Status } from "./models/status";

type commonSliceType = {
    path: string;
    pathname: string;
    status: Status;
    list: ProductsListResponse[],
}


const initialState: commonSliceType = {
        path: "",
        pathname: "",
        status: `initial`,
        list:
            [],
}

const commonSlice = createSlice({
    name: `common`,
    initialState,

    reducers: {
        changePath: (state, {payload}) => {
            state.path = payload;
        },
        changePathname: (state, {payload}) => {
            state.pathname = payload;
        },
        addProduct: ({list}, {payload}) => {
            list.push(payload)
        },
        removeProduct: (state, action) => {
            const removeIndex = state.list.findIndex(list => list.id === action.payload);
            state.list.splice(removeIndex, +1)
          },
    },
});

export const {
    changePath,
    changePathname,
    addProduct,
    removeProduct,
} = commonSlice.actions;

export const selectPath = (state: RootState) => state.common.path;
export const selectPathname = (state: RootState) => state.common.pathname;
export const selectList = (state: RootState) => state.common.list;

export default commonSlice.reducer;