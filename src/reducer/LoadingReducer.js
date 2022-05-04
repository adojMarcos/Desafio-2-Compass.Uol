import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        setFalse(state) {
            return false
        },
        setTrue(state) {
            return true
        }
    }
})

export const { setFalse, setTrue } = loadingSlice.actions
export default loadingSlice.reducer