import { serviceSlice } from './../Services/serviceSlice';
import { accountSlice } from './../Account/accountSlice';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { counterslice } from "./counterSlice";



export const store = configureStore({
    reducer: {
        counter: counterslice.reducer,
        account: accountSlice.reducer,
        services: serviceSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


