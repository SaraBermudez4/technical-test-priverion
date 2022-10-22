import {
    DELETE_PRODUCT,
    FETCH_ALL_PRODUCTS,
    FETCH_ALL_PRODUCTS_SUCCESS,
    FETCH_PRODUCT,
    FETCH_PRODUCT_SUCCESS,
    POST_PRODUCT,
    UPDATE_PRODUCT
} from ".";

export const fetchAllProducts = () => {
    return {
        type: FETCH_ALL_PRODUCTS,
    };
};
export const fetchAllProductsSuccess = (products) => {
    return {
        type: FETCH_ALL_PRODUCTS_SUCCESS,
        payload: products,
    };
};

export const fetchProduct = (payload) => {
    return {
        type: FETCH_PRODUCT,
        payload
    };
};
export const fetchProductSuccess = (product) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: product,
    };
};

export const postProduct = (payload) => {
    return {
        type: POST_PRODUCT,
        payload
    };
};

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id,
    };
};

export const updateProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
        payload: product,
    };
}