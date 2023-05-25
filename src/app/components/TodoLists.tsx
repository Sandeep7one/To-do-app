import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import Todo_Activity from "./Todo_Activity";
import { todoActions } from "../store/todo-Slice";

const TodoLists: React.FC = () => {
  const [isActive, setActive] = useState("all");
  const todoDatas = useSelector((state: RootState) => {
    if (state.todo.filter === "all") {
      return state.todo.todoData;
    } else if (state.todo.filter === "active") {
      return state.todo.todoData.filter((todo: any) => todo.active);
    } else if (state.todo.filter === "complete") {
      return state.todo.todoData.filter((todo: any) => !todo.active);
    }
  });

  const dispatch = useDispatch();

  const isCheckedHandler = (id: number) => {
    dispatch(todoActions.isCheckedHandler({ id: id }));
  };

  const lineThrowHandler = (isChecked: boolean) => {
    if (isChecked === true) {
      return "ml-2 text-justify overflow-hidden mr-1 text-gray-500 line-through";
    } else {
      return "ml-2 text-justify overflow-hidden mr-1 text-gray-500 ";
    }
  };

  const allCount = todoDatas.length;
  const activeCount = todoDatas.filter((todo: any) => todo.active).length;
  const activeCompleted = todoDatas.filter((todo: any) => !todo.active).length;

  const activeHandler = () => {
    switch (isActive) {
      case "all":
        return allCount;
      case "active":
        return activeCount;
      case "complete":
        return activeCompleted;
    }
  };

  return (
    <>
      {todoDatas?.map((todo: any) => {
        return (
          <ul className="text-center m-2" key={todo.id}>
            <li className="flex ml-[4.5rem] mr-[4.5rem]">
              <input
                type="checkbox"
                className="block h-[1.5rem] w-[1.5rem] rounded-md  border-gray-500 "
                checked={todo.isChecked}
                onChange={() => {
                  isCheckedHandler(todo.id);
                }}
              />
              <p className={lineThrowHandler(todo.isChecked)}>{todo.addTodo}</p>
            </li>
          </ul>
        );
      })}

      <hr className="mt-4 ml-[1.5rem] mr-[1.5rem] " />
      <Todo_Activity
        dataLists={todoDatas}
        activeHandler={activeHandler}
        setActive={setActive}
      />
    </>
  );
};

export default TodoLists;
