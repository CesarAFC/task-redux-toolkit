import { createSlice } from '@reduxjs/toolkit';

export const darkmode = createSlice({
    name: 'darkmode',
    initialState: false,
    reducers: {
      toogleDarkMode: (state, action) => {
        return !state
      }
    }
  })

  export const {toogleDarkMode}  = darkmode.actions
export default darkmode.reducer;