import { createSlice } from '@reduxjs/toolkit'
import {fetchUsers} from "./userAsyncActions";

const initialState = {
    users: {},
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            const users = action.payload.results.reduce((carry, item) => {
                carry[item.id] = item
                return carry
            }, {})
            return {
                ...state,
                users,
            }
        })
    }
})