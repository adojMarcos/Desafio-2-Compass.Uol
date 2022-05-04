import { createSlice } from "@reduxjs/toolkit";

const reposSlice = createSlice({
    name: 'repos',
    initialState: [],
    reducers: {
        setRepos(state, action) {
            return action.payload
        }, 
        cleanState(state) {
            return []
        }
    }
})

export const { setRepos, cleanState } = reposSlice.actions
export default reposSlice.reducer