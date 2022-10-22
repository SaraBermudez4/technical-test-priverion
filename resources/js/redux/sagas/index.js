import { all } from "redux-saga/effects";

// project imports
import fetchAllProducts from './productSaga';

export default function* rootSaga() {
    yield all([
        fetchAllProducts(),
    ]);
}