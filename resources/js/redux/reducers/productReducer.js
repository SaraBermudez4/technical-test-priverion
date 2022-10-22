import {
    FETCH_ALL_PRODUCTS,
    FETCH_ALL_PRODUCTS_SUCCESS
} from "../actions";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_PRODUCTS:
            return {
                ...state,
                loading: true,
            };
        case FETCH_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        default:
            return state;
    }
}