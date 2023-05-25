import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo-Slice";

interface _props {
  dataLists: any;
  activeHandler: any;
  setActive: any;
}

const Todo_Activity: React.FC<_props> = ({
  dataLists,
  activeHandler,
  setActive,
}) => {
  const dispatch = useDispatch();

  const filterActivity = (type: string) => {
    setActive(type);
    dispatch(todoActions.filterActivity({ type: type }));
  };

  return (
    <>
      <div className="flex justify-between w-[90%] mt-4 ml-[2rem] mr-[1.5rem] m-auto outline-none mb-4">
        <div className="flex">
          <span className="text-left text-gray-500">
            {" "}
            {activeHandler()} Activity
          </span>
          <div dir="ltr" className="border-s-2 ml-4 border-gray-400" />
        </div>

        <div className="flex justify-around w-[40%]">
          <button
            className="text-gray-700 border py-[0.5%] px-[1.5%] rounded-sm"
            onClick={() => filterActivity("all")}
          >
            All
          </button>
          <button
            className=" text-gray-500"
            onClick={() => filterActivity("active")}
          >
            Active
          </button>
          <button
            className=" text-gray-500"
            onClick={() => filterActivity("complete")}
          >
            Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo_Activity;
