import { createSlice } from "@reduxjs/toolkit";


import data from "../../data/product";

const slice = createSlice({
  name: "product",
  initialState: data,
  reducers: {
    insert: (state, action) => {
      if (action.payload.productName) {
        let newState = [...state];
        newState.push(action.payload
        );

        return newState;
      }
    },
    edit: (state, action) => {
      // loop to check if the id exists in my list, and then change the data according to the id
      for (let i in state) {
        if (state[i].id === action.payload.id) {
          state[i].productName = action.payload.productName;          
          state[i].countInStock = action.payload.countInStock;
          state[i].putchasPrice = action.payload.putchasPrice;
          state[i].productValue = action.payload.productValue;
        }
      }
    },
    del: (state, action) => {
      if (action.payload.id) {
        let newState = [...state];
        newState = newState.filter((item) => item.id != action.payload.id);
        return newState;
      }
    },
    order: (state) => {
      let newState = [...state];
      newState = newState.sort((a, b) =>
        a.productName > b.productName ? 1 : -1
      );
      return newState;
    },
    productlistReducer: (state, action) => {
      let newState = action.payload
      return newState;
    }
  },
});

export const { insert, edit, del, order , productlistReducer } = slice.actions;
export default slice.reducer;
