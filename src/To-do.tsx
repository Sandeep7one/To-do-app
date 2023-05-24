import TodoInput from "./app/components/TodoInput";
import TodoLists from "./app/components/TodoLists";
import Todo_Activity from "./app/components/Todo_Activity";
import Cart from "./app/components/UI/Cart";

const Todo: React.FC = () => {
  return (
    <Cart>
      <h1 className="text-center text-lg text-gray-500 font-bold font-serif italic">
        TODO
      </h1>
      <main>
        <TodoInput />
        <TodoLists />
       
      </main>
    </Cart>
  );
};

export default Todo;
