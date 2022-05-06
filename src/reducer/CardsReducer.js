import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: [],
    reducers: {
        setCards(state, action) {
            return action.payload
        },
        loadMoreCards(state, action) {
            const newState = state.concat(action.payload)
            return newState
        }, 
        cleanState(state) {
            return []
        }
    }
})

export const { setCards, cleanState, loadMoreCards } = cardsSlice.actions
export default cardsSlice.reducer