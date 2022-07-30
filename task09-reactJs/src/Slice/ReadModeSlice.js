import { createSlice } from '@reduxjs/toolkit'

export const ReadModeSlice = createSlice({
    name: 'ReadMode',
    initialState: {
        readAll: false
    },
    reducers: {
        changeReadMode: (state, action) => {
            state.readAll = action.payload    
        }
    },
})

export const { changeReadMode } = ReadModeSlice.actions;


export default ReadModeSlice.reducer;