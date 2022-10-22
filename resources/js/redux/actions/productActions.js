import {
    DELETE_PRODUCT,
    FETCH_ALL_PRODUCTS,
    FETCH_ALL_PRODUCTS_SUCCESS,
    FETCH_PRODUCT,
    FETCH_PRODUCT_SUCCESS,
    POST_PRODUCT,
    UPDATE_PRODUCT
} from ".";

// Get all products
export const fetchAllProducts = () => {
    return {
        type: FETCH_ALL_PRODUCTS,
    };
};

// Get all products success
export const fetchAllProductsSuccess = (products) => {
    return {
        type: FETCH_ALL_PRODUCTS_SUCCESS,
        payload: products,
    };
};

// Get product
export const fetchProduct = (payload) => {
    return {
        type: FETCH_PRODUCT,
        payload
    };
};

// Get product success
export const fetchProductSuccess = (product) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: product,
    };
};

// Post product
export const postProduct = (payload) => {
    return {
        type: POST_PRODUCT,
        payload
    };
};

// Update product
export const updateProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
        payload: product,
    };
}

// Delete product
export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id,
    };
};