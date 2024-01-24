import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface productProps {
  userId: string;
  price: number;
  name: string;
}

interface initialState {
  value: number;
  product: productProps[];
}

const initialState: initialState = {
  value: 10,
  product: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    amount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    addProduct: (state, action: PayloadAction<productProps>) => {
      state.product.push(action.payload);
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      state.product = state.product.filter(
        (item) => item.userId !== action.payload
      );
    },
  },
});

export const { increment, amount, addProduct, deleteProduct } =
  counterSlice.actions;
export default counterSlice.reducer;
