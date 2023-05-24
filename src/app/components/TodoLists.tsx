import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import Todo_Activity from "./Todo_Activity";

const TodoLists: React.FC = () => {
  const todoDatas = useSelector((state: RootState) => state.todo.todoData);
console.log(todoDatas, "Todos ")
  return (
    <>
      {todoDatas?.map((todo: any, index: number) => {
        console.log(todo.checkBox, "Todo");
        return (
          <ul className="text-center m-2">
            <li className="flex ml-[4.5rem] mr-[4.5rem]" key={todo.id}>
              <input
                type="checkbox"
                className="block h-[1.5rem] w-[1.5rem] rounded-md  border-gray-500 "
                // checked={todo.checkBox}
                // onClick={() => handalChecked(todo.id)}
              />
              <p className="ml-2 text-justify overflow-hidden mr-1 text-gray-500">
                {todo.addTodo}
              </p>
            </li>
          </ul>
        );
      })}
      <hr className="mt-4 ml-[1.5rem] mr-[1.5rem] " />
      <Todo_Activity />
    </>
  );
};

export default TodoLists;
