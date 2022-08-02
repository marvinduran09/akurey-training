import { configureStore } from '@reduxjs/toolkit';
import readModeReducer from '../Slice/ReadModeSlice';
import hamburgerMenuDisplayModeReducer from '../Slice/HamburgerMenuDisplayModeSlice';

export default configureStore({
  reducer: {
    readMode: readModeReducer,
    hamburgerMenuDisplayMode: hamburgerMenuDisplayModeReducer
  },
});
