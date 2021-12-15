import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {io} from "socket.io-client";
import type {Socket} from "socket.io-client";

interface State {
    socket?: Socket;
}

const initialState : State ={
    socket: undefined,
} 
export const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers:{

    }
})

export default rootSlice.reducer;