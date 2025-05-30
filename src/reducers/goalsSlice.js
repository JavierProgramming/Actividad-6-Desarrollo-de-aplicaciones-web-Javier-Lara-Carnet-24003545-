import { createSlice } from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [
            {
                name: 'Aprender Inglés Avanzado',
                description: 'Estudiar y practicar diariamente para obtener certificación C1',
                dueDate: '2026-06-15'
            },
            {
                name: 'Ahorrar para un auto',
                description: 'Ahorrar mensualmente para comprar un auto usado en buen estado',
                dueDate: '2027-12-01'
            },
            {
                name: 'Crear un emprendimiento digital',
                description: 'Lanzar una tienda en línea de productos sostenibles',
                dueDate: '2026-03-30'
            }
        ],
    },
    reducers: {
        addGoal: (state, action) => {
            state.value.push(action.payload);
        }
    }
});

export const { addGoal } = goalsSlice.actions;
export const selectGoals = (state) => state.goals.value;

export default goalsSlice.reducer;
