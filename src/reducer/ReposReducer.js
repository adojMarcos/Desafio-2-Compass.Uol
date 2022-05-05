import { createSlice } from "@reduxjs/toolkit";

const reposSlice = createSlice({
    name: 'repos',
    initialState: [],
    reducers: {
        setRepos(state, action) {
            return action.payload
        },
        loadMoreRepos(state, action) {
            const newState = state.concat(action.payload)
            return newState
        }, 
        cleanState(state) {
            return []
        }
    }
})

export const { setRepos, cleanState, loadMoreRepos } = reposSlice.actions
export default reposSlice.reducer