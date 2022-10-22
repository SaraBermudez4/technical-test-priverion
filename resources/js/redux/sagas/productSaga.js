import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";

import { FETCH_ALL_PRODUCTS } from "../actions";
import { fetchAllProductsSuccess } from "../actions/productActions";

const axiosFetchAllProductos = () => {
    try {
        const response = axios.get("http://localhost/produtcs/")
        return response;
    } catch (error) {
        console.log(error);
    }
}

function* fetchAllProductsRequest() {
    const response = yield call(axiosFetchAllProductos);
    if (response) {
        yield put(fetchAllProductsSuccess(response.data));
    } else {
        console.log("error");
    }
}

function* fetchAllProducts() {
    yield takeEvery(FETCH_ALL_PRODUCTS, fetchAllProductsRequest);
}

export default function* rootSaga() {
    yield all([
        fetchAllProducts(),
    ]);
}