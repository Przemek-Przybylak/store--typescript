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

const shoppingBasketSlice = createSlice({
    name: `basket`,
    initialState,

    reducers: {
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
  addProduct,
    removeProduct,
} = shoppingBasketSlice.actions;

export const selectList = (state: RootState) => state.shoppingBasket.list;


export default shoppingBasketSlice.reducer;