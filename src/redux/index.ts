import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import {configureStore,} from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(rootSaga);

export default store;