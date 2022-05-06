import { createSlice } from "@reduxjs/toolkit";

const followersSlice = createSlice({
    name: 'followers',
    initialState: [],
    reducers: {
        setFollowers(state, action) {
            return action.payload
        },
        loadMoreFollowers(state, action) {
            const newState = state.concat(action.payload)
            return newState
        }, 
        cleanFollowersState(state) {
            return []
        }
    }
})

export const {setFollowers, loadMoreFollowers, cleanFollowersState} = followersSlice.actions
export default followersSlice.reducer