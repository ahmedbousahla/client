import countReducer from "./slices/countSlice";
import productReducer from "./slices/productSlice";
import financeReducer from "./slices/financeSlice";
import cartReducer from "./slices/cartSlice";

export default {
  count: countReducer,
  cart: cartReducer,
  product: productReducer,
  finance: financeReducer,
};
