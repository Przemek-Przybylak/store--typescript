import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../core/store";

type PathState = {
    path: string;
}

const initialState: PathState = {
        path: ""
}

const commonSlice = createSlice({
    name: `path`,
    initialState,

    reducers: {
        changePath: (state, {payload}) => {
            state.path = payload;
        }
    },
});

export const {
    changePath,
} = commonSlice.actions;

export const selectPath = (state: RootState) => state.path.path;

export default commonSlice.reducer;