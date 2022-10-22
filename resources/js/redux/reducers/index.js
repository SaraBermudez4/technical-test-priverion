import { combineReducers } from 'redux';
import ProductReducer from "./ProductReducer";

const RootReducer = combineReducers({
    products: ProductReducer,
});

export default RootReducer;