import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../core/store";

export interface State {
    status: string;
    list: string[] | {} | null;
}

const listSlice = createSlice({
    name: `allProducts`,
    initialState: {
        status: `initial`,
        list: {}
    } as State,
    reducers: {
        fetchList: (state) => {
            state.status = `loading`;
        },
        fetchListSuccess: (state, {payload: list}) => {
            state.status = `success`;
            state.list = list;
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

export const selectList = (state: RootState) => state.list;

export default listSlice.reducer;