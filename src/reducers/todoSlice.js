import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      if (!newTodo || !newTodo.name) {
        console.warn('Invalid todo item:', newTodo);
        return;
      }

      state.value.push(newTodo);

      fetch('http://localhost:3001/tasks/addTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '123456',
        },
        body: JSON.stringify(newTodo),
      }).catch((err) => {
        console.error('Error adding task:', err);
      });
    },

    initAddTodo: (state, action) => {
      const newTodo = action.payload;
      if (newTodo && newTodo.name) {
        state.value.push(newTodo);
      }
    },

    removeTodo: (state, action) => {
      const idToRemove = action.payload;
      state.value = state.value.filter((task) => task._id !== idToRemove);

      fetch(`http://localhost:3001/tasks/removeTask/${idToRemove}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '123456',
        },
      }).catch((err) => {
        console.error('Error removing task:', err);
      });
    },
  },
});

export const { addTodo, initAddTodo, removeTodo } = todoSlice.actions;
export const selectTodos = (state) => state.todos.value;

export default todoSlice.reducer;
