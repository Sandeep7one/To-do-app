import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface stateTypes {
  inputTodo: string;
  todoData: any;
  filter: string;
}

const initialState: stateTypes = {
  inputTodo: "",
  todoData: [],
  filter: "all",
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
        isChecked: false,
        id: Date.now(),
        active: "active",
      });
    },
    isCheckedHandler: (state, action) => {
      const isCheckedTodo = state.todoData.find(
        (todo: any) => todo.id === action.payload.id
      );

      if (isCheckedTodo) {
        isCheckedTodo.isChecked = !isCheckedTodo.isChecked;
        isCheckedTodo.active = !isCheckedTodo.active;
      } else {
        isCheckedTodo.isChecked = isCheckedTodo.isChecked;
        isCheckedTodo.inactive = isCheckedTodo.active;
      }
    },

    filterActivity: (state, action) => {
      state.filter = action.payload.type;
    },
  },
});
export const todoActions = todoSlice.actions;
export default todoSlice;
