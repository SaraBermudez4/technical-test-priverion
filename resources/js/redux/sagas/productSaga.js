import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";

import { DELETE_PRODUCT, FETCH_ALL_PRODUCTS, FETCH_PRODUCT, POST_PRODUCT, UPDATE_PRODUCT } from "../actions";
import { fetchAllProductsSuccess, fetchProductSuccess } from "../actions/productActions";

const axiosFetchAllProducts = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/products/")
        return response;
    } catch (error) {
        console.error(error);
    }
}

const axiosFetchProduct = async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/products/${id}`)
        return response;
    } catch (error) {
        console.error(error);
    }
}

const axiosPostProduct = async (data) => {
    try {
        await axios.post(`http://127.0.0.1:8000/products`, data)
    } catch (error) {
        console.error(error);
    }
}

const axiosUpdateProduct = async (data, id) => {
    try {
        await axios.put(`http://127.0.0.1:8000/products/${data.id}`, data.data)
    } catch (error) {
        console.error(error);
    }
}

const axiosDeleteProduct = async (id) => {
    try {
        await axios.delete(`http://127.0.0.1:8000/products/${id}`)
    } catch (error) {
        console.error(error);
    }
}

function* fetchAllProductsRequest() {
    const response = yield call(axiosFetchAllProducts);
    if (response) {
        yield put(fetchAllProductsSuccess(response.data));
    } else {
        console.log("error");
    }
}

function* fetchProductRequest({ payload }) {
    const response = yield call(axiosFetchProduct, payload);
    if (response) {
        yield put(fetchProductSuccess(response.data));
    } else {
        console.log("error");
    }
}

function* postProductRequest({ payload }) {
    yield call(axiosPostProduct, payload.data);
}

function* updateProductRequest({ payload }) {
    yield call(axiosUpdateProduct, payload);
}

function* deleteProductRequest({ payload }) {
    yield call(axiosDeleteProduct, payload);
}

function* fetchAllProducts() {
    yield takeEvery(FETCH_ALL_PRODUCTS, fetchAllProductsRequest);
}

function* postProduct() {
    yield takeEvery(POST_PRODUCT, postProductRequest);
}

function* updateProduct() {
    yield takeEvery(UPDATE_PRODUCT, updateProductRequest);
}

function* fetchProduct() {
    yield takeEvery(FETCH_PRODUCT, fetchProductRequest);
}

function* deleteProduct() {
    yield takeEvery(DELETE_PRODUCT, deleteProductRequest);
}

export default function* rootSaga() {
    yield all([
        fetchAllProducts(),
        fetchProduct(),
        postProduct(),
        updateProduct(),
        deleteProduct()
    ]);
}