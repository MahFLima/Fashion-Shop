import { FileSearch, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { Button } from "./Button";

export const ListProducts: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <strong className="text-5xl">Exclusive Products</strong>
      <p className="text-base text-gray-400">
        Search the latest fashion articles and find amazing products buy from or
        huge collection
      </p>
      <div className="flex gap-4 relative">
        <MagnifyingGlass size={20} className="absolute top-4 ml-2"/>
        <input type="text" placeholder="Search products" className="bg-gray-100 py-4 px-9 rounded"/>
        <button className="bg-black text-white w-48 py-4 rounded font-medium hover:opacity-70" >Explore Now</button>
      </div>
      <div className="flex gap-4">
        <Button title="Everything" />
        <Button title="Everything" />
        <Button title="Everything" />
        <Button title="Everything" />
        <Button title="Everything" />
        <Button title="Everything" />
      </div>
    </div>
  );
};
