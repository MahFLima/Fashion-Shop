import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MenuMobile } from "../components/MenuMobile";
import data from "../data";

export function ProductPage() {
  const { name } = useParams()
  const [quantities, setQuantities] = useState(1)
  const [isActive, setIsActive] = useState(false)

  function handleClick() {
    isActive ? setIsActive(false) : setIsActive(true)
  }

  const product = data.filter(item => item.name === name)

  return (
    <div className="flex flex-col">
      <Header onClick={handleClick} />
      {isActive ?
        (<MenuMobile />) :
        (
          <>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 px-20 py-10">
              <img src={product[0].srcImg} className="w-full h-[400px] object-contain" />
              <div className="flex flex-col gap-6">
                <strong className="text-5xl">{product[0].name}</strong>
                <p className="text-xl">$ {product[0].value}</p>
                <p className="text-base">{product[0].description}</p>
                <div className="flex gap-4">
                  <Button name="slide" click={() => { }} title="P" slide="slide1" />
                  <Button name="slide" click={() => { }} title="M" slide="slide2" />
                  <Button name="slide" click={() => { }} title="G" slide="slide3" />
                </div>
                <div className="w-ful flex gap-8">
                  <div className="w-full flex justify-between items-center border border-gray-400 px-6 py-4">
                    <p className="text-base text-gray-400">Quantity</p>
                    <span className="flex gap-6">
                      <button onClick={() => { setQuantities(quantities - 1) }}><CaretLeft size={24} /></button>
                      <p>{quantities}</p>
                      <button onClick={() => { setQuantities(quantities + 1) }}><CaretRight size={24} /></button>
                    </span>
                  </div>
                  <button className="w-40 bg-black text-white py-4 px-2 rounded font-medium hover:opacity-70" >Add to Cart</button>
                </div>
              </div>
            </div>
            <Footer />
          </>
        )
      }
    </div>
  )
}