import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api/api";

const middleware = (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware);

const reducer = {
    [api.reducerPath]: api.reducer,
};

export const store = configureStore({
    reducer,
    middleware,
});

setupListeners(store.dispatch);

export default store;
