import { createSlice } from '@reduxjs/toolkit'

export const optionSlice = createSlice({
    name: 'option',
    initialState: {
        value: 'tasks',
    },
    reducers: {
        changeOption: (state, action) => {
            if (['tasks', 'goals'].includes(action.payload)) {
                state.value = action.payload;
            } else {
                console.warn(`Invalid option value: ${action.payload}`);
            }
        }
    }
});

export const { changeOption } = optionSlice.actions;

export default optionSlice.reducer;
