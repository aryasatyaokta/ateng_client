import { createSlice } from "@reduxjs/toolkit"

export const resultReducerPretest = createSlice({
    name : 'resultPretest',
    initialState : {
        userIdPretest : null,
        resultPretest : []
    },
    reducers : {
        setUserIdPretest : (state, action) => {
            state.userIdPretest = action.payload
        },

        pushResultActionPretest : (state, action) => {
            state.resultPretest.push(action.payload)
        },

        updateResultActionPretest : (state, action) => {
            const {trace, checked} = action.payload;
            state.resultPretest.fill(checked, trace, trace + 1)
        },

        resetResultActionPretest : () => {
            return {
                userIdPretest : null,
                resultPretest : []
            }
        }
    }
})

export const {setUserIdPretest, pushResultActionPretest, resetResultActionPretest, updateResultActionPretest} = resultReducerPretest.actions;

export default resultReducerPretest.reducer;