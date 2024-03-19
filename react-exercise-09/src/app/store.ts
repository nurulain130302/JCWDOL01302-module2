import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./features/counterSlice";
import userReducer from "./features/userSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        userSlice: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

//export typeAppDispatch = typeof store.dispatch