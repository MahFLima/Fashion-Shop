import { Link, useNavigate } from "react-router-dom"



export const MenuMobile: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col gap-8 text-lg text-gray-400 ">
        <a onClick={() => {navigate('/')}} className="px-6 py-4 border-b border-gray-400" >
          Home
        </a>
        <a onClick={() => {navigate('/list-products')}} className="px-6 py-4 border-b border-gray-400">
          Products
        </a>
        <a href="#contacts" className="px-6 py-4 border-b border-gray-400">
          Contact
        </a>
      </div>
    </div>
  )
}