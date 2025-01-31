import {createSlice} from "@reduxjs/toolkit"
import { getUsers } from "./users.api"
const initialState = {
    accounts:[],
    status:""
}

export const UserSlice = createSlice({
    name:"Users",
    initialState,
    reducers:{

    },
    extraReducers:builder => {
        builder
        .addCase(
            getUsers.pending, (state, action) => {
                state.status = "loading..."
            }
        )
        .addCase(
            getUsers.fulfilled,(state, action) => {
                state.status = ""
                state.accounts = action.payload
            }
        )
    }
})

export const UserReducer = UserSlice.reducer