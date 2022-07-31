import { ShoppingBag } from "phosphor-react";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between px-20 py-10 items-center border-b border-gray-300">
      <h1 className="text-4xl">Fashion <strong className="text-purple-400">Shop</strong></h1>
      <div className="flex gap-8 text-lg">
        <a className="hover:text-purple-400" href="">Home</a>
        <a className="hover:text-purple-400" href="">Products</a>
        <a className="hover:text-purple-400" href="">Contact</a>
      </div>
      <button>
        <ShoppingBag size={32} className="hover:text-purple-400"/>
      </button>
    </div>
  );
};
