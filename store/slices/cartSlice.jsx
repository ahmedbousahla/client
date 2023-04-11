import { createSlice , current} from "@reduxjs/toolkit";


import datac from "../../data/cart";

const slice = createSlice({
  name: "cart",
  initialState: datac,
  reducers: {
    insertc: (state, action) => {
      if (action.payload.id) {
        let newState = [...state];
        newState.push(action.payload
        );

        return newState;
      }
    },
    editc: (state, action) => {
      // loop to check if the id exists in my list, and then change the data according to the id
      console.log('ction.payload' , action.payload)
      console.log('state' , state.cart)
     
        // if (state[i].id === action.payload.id) {                   
        //   state[i].qty = action.payload.qty;          
        // }

        const updatedCart = action.payload;
        newState = { ...state.cart, ...updatedCart };
        return newState

    },
    delc: (state, action) => {
      if (action.payload.name) {
        let newState = [...state];
        newState = newState.filter((item) => item.name != action.payload.name);
        return newState;
      }
    },
    cartlistReducer: (state, action) => {
      let newState = action.payload
      return newState;
    } ,
    empty: (state, action) => {
      let newState = []
      return newState;
    }
    
  },
});

export const { insertc, editc, delc , empty  , cartlistReducer} = slice.actions;
export default slice.reducer;
