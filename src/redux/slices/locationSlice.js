import { createSlice } from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    location: [],
  },
  reducers: {
    setLocation: (state, action) => {
        state.location = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export const selectLocation = state => state.location;

export default locationSlice.reducer;
