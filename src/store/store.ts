import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice.ts";

const store = configureStore({
    reducer: {
        userState: userReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store;
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];