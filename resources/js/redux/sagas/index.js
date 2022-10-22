import { all } from "redux-saga/effects";

import fetchAllProducts from './productSaga';

export default function* rootSaga() {
    yield all([
        fetchAllProducts(),
    ]);
}