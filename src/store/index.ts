import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "./todoSlise";

export const makeStore = configureStore({
    reducer:{
        todo: todoReduser
    }
})
export type AppStore = typeof makeStore;
export type AppDispatch = AppStore['dispatch'];
export type AppState = ReturnType<typeof makeStore.getState>;