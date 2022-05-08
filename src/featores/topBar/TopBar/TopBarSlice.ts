import {CategoriesResponse} from "../models/categoriesResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../../core/store";

type categoriesState = {
    status: string;
    categoties: CategoriesResponse[];
}

const initialState: categoriesState = {
    status: `initial`,
    categoties:
        []
}

const categoriesSlice = createSlice({
    name: `categories`,
    initialState,

    reducers: {
        fetchList: (state) => {
            state.status = `loading`;
        },
        fetchListSuccess: (state, {payload}: PayloadAction<CategoriesResponse[]>) => {
            state.status = `success`;
            state.categoties = payload;
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
} = categoriesSlice.actions;

export const selectList = (state: RootState) => state.categories.categoties;

export default categoriesSlice.reducer;