import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
      });
    },
    todoDeleted(state, action) {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    todoUpdated(state, action) {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
  },
});

export const { todoAdded, todoDeleted, todoUpdated } = todosSlice.actions;
export default todosSlice.reducer;
