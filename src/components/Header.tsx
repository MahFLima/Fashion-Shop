import { List, ShoppingBag, X } from "phosphor-react";
import React, { useState } from "react";

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false)

  function handleClick(){
    isActive ? setIsActive(false) : setIsActive(true)
  }
  return (
    <div className="flex justify-between px-8 md:px-20 py-10 items-center border-b border-gray-300">
      <h1 className="text-3xl md:text-4xl">Fashion <strong className="text-purple-400">Shop</strong></h1>
      <div className="hidden lg:flex gap-8 text-lg">
        <a className="hover:text-purple-400" href="">Home</a>
        <a className="hover:text-purple-400" href="">Products</a>
        <a className="hover:text-purple-400" href="">Contact</a>
      </div>
      <button className="hidden lg:flex">
        <ShoppingBag size={32} className="hover:text-purple-400"/>
      </button>
      <button onClick={handleClick} className="lg:hidden">
        {isActive ? <X size={32} className="hover:text-purple-400"/> : <List size={32} className="hover:text-purple-400"/>}
      </button>
    </div>
  );
};
