import { FileSearch, MagnifyingGlass } from "phosphor-react";
import React, { useState } from "react";
import data from "../data";
import { Button } from "./Button";
import { CardProduct, Props } from "./CardProduct";


export const ListProducts: React.FC = () => {
  const [description, setDescription] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const result = data.filter(item => item.description === description)
  const listSearch = data.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()))

  function handleDescription(description: string) {
    setDescription(description)
    setSearchInput('')
  }

  return (
    <div className="flex flex-col items-center gap-6 mb-8 px-6 md:p-0">
      <strong className="text-4xl md:text-center md:text-5xl">Exclusive Products</strong>
      <p className="text-sm md:text-base text-gray-400 mb-6 md:text-center">
        Search the latest fashion articles and find amazing products buy from or
        huge collection
      </p>
      <div className="flex flex-col md:flex-row gap-4 relative mb-6">
        <MagnifyingGlass size={20} className="absolute top-4 left-2" />
        <input type="text" placeholder="Search products" className="bg-gray-100 py-4 px-9 rounded w-full" value={searchInput} onChange={(ev) => setSearchInput(ev.target.value)} />
        <button className="bg-black text-white w-48 py-4 rounded font-medium hover:opacity-70" >Explore Now</button>
      </div>
      <div className="flex justify-center flex-wrap gap-4 mb-10 overflow-auto">
        <Button click={() => { handleDescription('Shoes') }} title="Shoes" slide="slide1" />
        <Button click={() => { handleDescription('Shirts') }} title="Shirts" slide="slide2" />
        <Button click={() => { handleDescription('Dresses') }} title="Dresses" slide="slide3" />
        <Button click={() => { handleDescription('Pants') }} title="Pants" slide="slide4" />
        <Button click={() => { handleDescription('Acessories') }} title="Acessories" slide="slide5" />
        <Button click={() => { handleDescription('') }} title="Everything" slide="slide6" />
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {searchInput ?
          (
            listSearch.map((item, index) => {
              return (
                <CardProduct
                  key={index}
                  name={item.name}
                  description={item.description}
                  srcImg={item.srcImg}
                  value={item.value}
                />
              )
            })
          ) :
          (
            description ?
              (result.map((item, index) => {
                return (
                  <CardProduct
                    key={index}
                    name={item.name}
                    description={item.description}
                    srcImg={item.srcImg}
                    value={item.value}
                  />
                )
              })) :
              (
                (data.map((item, index) => {
                  return (
                    <CardProduct
                      key={index}
                      name={item.name}
                      description={item.description}
                      srcImg={item.srcImg}
                      value={item.value}
                    />
                  )
                }))
              )
          )
        }

      </div>
    </div>
  );
};
