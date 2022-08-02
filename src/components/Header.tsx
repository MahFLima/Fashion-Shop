import { List, ShoppingBag, X } from "phosphor-react";
import React, { useState } from "react";

type Props = React.HTMLProps<HTMLButtonElement> 

export const Header: React.FC<Props> = ({onClick}) => {

  return (
    <div className="flex justify-between px-8 md:px-20 py-10 items-center border-b border-gray-300">
      <h1 className="text-3xl md:text-4xl">Fashion <strong className="text-purple-400">Shop</strong></h1>
      <div className="hidden lg:flex gap-8 text-lg">
        <a className="hover:text-purple-400" href="#home">Home</a>
        <a className="hover:text-purple-400" href="#products">Products</a>
        <a className="hover:text-purple-400" href="#contacts">Contact</a>
      </div>
      <button className="hidden lg:flex">
        <ShoppingBag size={32} className="hover:text-purple-400"/>
      </button>
      <button onClick={onClick} className="lg:hidden">
        <List size={32} className="hover:text-purple-400"/>
      </button>
    </div>
  );
};
