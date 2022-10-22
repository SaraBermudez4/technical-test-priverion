import {
    FETCH_ALL_PRODUCTS,
    FETCH_ALL_PRODUCTS_SUCCESS,
    FETCH_PRODUCT_SUCCESS
} from "../actions";

const initialState = {
    products: [],
    product: {
        id: '',
        name: '',
        amount: '',
        type: ''
    },
    loading: false,
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
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload,
            };
        default:
            return state;
    }
}