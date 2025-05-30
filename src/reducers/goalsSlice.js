import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [
            {
                'name':'Graduarme de la Universidad',
                'description':'Ganar todos los cursos',
                'dueDate':'2028-04-20'
            }
        ],
    },
    reducers: {
        addGoal: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addGoal } =  todoSlice.actions
export const selectGoals = (state) => state.goals.value

export default todoSlice.reducer
