import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Cart: React.FC<props> = ({ children }) => {
  return (
    <div className=" max-w-[45rem] min-w-[35rem] m-auto mt-[3rem] rounded-sm pb-1 border-gray-300  shadow-lg shadow-cyan-500/50 ">
      {children}
    </div>
  );
};

export default Cart;
