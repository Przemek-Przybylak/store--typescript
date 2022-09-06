import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../core/store";
import {ProductsListResponse} from "../../common/models/ProductsListResponse";

type CategoryState = {
    status: string;
    product: ProductsListResponse;
}

const initialState: CategoryState = {
    status: `initial`,
    product: { 
      id: 0,
      title: "",
      price: 0,
      category: "string",
      description: "string",
      image: ""
    },
}

const itemSlice = createSlice({
    name: `product`,
    initialState,

    reducers: {
        fetchProductDetails: (state) => {
            state.status = `loading`;
        },
        fetchProductDetailsSuccess: (state, {payload}: PayloadAction<ProductsListResponse>) => {
            state.status = `success`;
            state.product = payload;
        },
        fetchProductDetailsError: (state) => {
            state.status = `error`
        },
    },
});

export const {
    fetchProductDetails,
    fetchProductDetailsSuccess,
    fetchProductDetailsError,
} = itemSlice.actions;

export const selectProduct = (state: RootState) => state.item.product;

export default itemSlice.reducer;