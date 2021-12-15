import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../slices/root.slice";
import devToolsEnhancer from 'remote-redux-devtools';

const store = configureStore({
    reducer:{
        Root: rootReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;