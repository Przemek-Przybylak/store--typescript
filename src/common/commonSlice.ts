import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../core/store";
import { basketProduct } from "./models/basket";
import { Status } from "./models/status";

type commonSliceType = {
    path: string;
    status: Status;
    list: basketProduct[],
}


const initialState: commonSliceType = {
        path: "",
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
    addProduct,
    removeProduct,
} = commonSlice.actions;

export const selectPath = (state: RootState) => state.common.path;
export const selectList = (state: RootState) => state.common.list;

export default commonSlice.reducer;