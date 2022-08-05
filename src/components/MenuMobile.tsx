import { useNavigate } from "react-router-dom"

type Props = {
  click: () => void
}

export const MenuMobile: React.FC<Props> = ({click}) => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col gap-8 text-lg text-gray-400 ">
        <a onClick={click} href="#home" className="px-6 py-4 border-b border-gray-400" >Home</a>
        <a onClick={click} href="#products" className="px-6 py-4 border-b border-gray-400" >Products</a>
        <a onClick={click} href="#contacts" className="px-6 py-4 border-b border-gray-400" >Contact</a>
      </div>
    </div>
  )
}