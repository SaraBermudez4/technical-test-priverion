import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from "redux-saga";
import thunk from 'redux-thunk';

// project imports
import RootReducer from "./reducers"
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middlewares = [thunk, sagaMiddleware];

const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

const persister = persistStore(store);
sagaMiddleware.run(rootSaga);
export { store, persister };