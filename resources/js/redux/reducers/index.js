import { combineReducers } from 'redux';

// project imports
import ProductReducer from "./productReducer";

const RootReducer = combineReducers({
    products: ProductReducer,
});

export default RootReducer;