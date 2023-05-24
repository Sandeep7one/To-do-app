import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface stateTypes {
  inputTodo: string;
  todoData: any;
}

const initialState: stateTypes = {
  inputTodo: "",
  todoData: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    updateTodo: (state, action: PayloadAction<string>) => {
      state.inputTodo = action.payload;
    },
    clearInputTodo: (state, action) => {
      state.inputTodo = action.payload;
    },
    updateTodoData: (state, action) => {
      state.todoData.push({
        addTodo: action.payload.addTodo,
        checkBox: false,
        id: Date.now(),
      });
    },
    updateCheckBox: (state, action) => {
      const newId = action.payload.id;
    },
  },
});
export const todoActions = todoSlice.actions;
export default todoSlice;
