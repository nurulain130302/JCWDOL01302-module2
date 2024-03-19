import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./features/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        userSlice: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

//export typeAppDispatch = typeof store.dispatch