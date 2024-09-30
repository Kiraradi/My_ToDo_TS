import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "./todoSlise";

export const makeStore = configureStore({
    reducer:{
        todo: todoReduser
    }
})

export type AppDispatch = typeof makeStore.dispatch;
export type AppState = typeof makeStore.getState;