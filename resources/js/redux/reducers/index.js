import { combineReducers } from 'redux';

// project imports
import ProductReducer from "./ProductReducer";

const RootReducer = combineReducers({
    products: ProductReducer,
});

export default RootReducer;