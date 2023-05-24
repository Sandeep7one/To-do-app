import React from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todo-Slice";
import { RootState } from "../store/index";

const TodoInput: React.FC = () => {
  const todoInput = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const submit_Todo = (value: any) => {
    dispatch(
      todoActions.updateTodoData({
        addTodo: value.inputTodo,
      
      })
    );
    dispatch(todoActions.clearInputTodo(""));
  };

  return (
    <Formik initialValues={todoInput} onSubmit={submit_Todo} enableReinitialize>
      {(todoValue) => {
        const { values, setValues } = todoValue;

        return (
          <Form>
            <div className="text-center mb-4 flex justify-center">
              <input
                type="text"
                name="todo"
                id="todo"
                placeholder="Add Dodo..."
                className="border p-1.5  rounded-md w-[80%] block outline-none bg-blue-50"
                value={values.inputTodo}
                onChange={(e) => {
                  dispatch(todoActions.updateTodo(e.target.value));
                  setValues({ ...values, inputTodo: e.target.value });
                }}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default TodoInput;
