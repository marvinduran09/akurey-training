import { createSlice } from '@reduxjs/toolkit'

export const HamburgerMenuDisplayModeSlice = createSlice({
    name: 'HamburgerMenuDisplayMode',
    initialState: {
        displayHamburgerMenuOptions: false
    },
    reducers: {
        changeHamburgerMenuDisplayMode: (state, action) => {
            state.displayHamburgerMenuOptions = action.payload    
        },
    },
})

export const { changeHamburgerMenuDisplayMode } = HamburgerMenuDisplayModeSlice.actions;

export default HamburgerMenuDisplayModeSlice.reducer;