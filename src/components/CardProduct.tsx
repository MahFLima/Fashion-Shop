type Props = {
  name: string,
  description: string,
  srcImg: string,
  value: string
}

export function CardProduct({name, description, srcImg, value}: Props){
  return(
    <a href="#" className="flex flex-col trasition hover:translate-y-1 duration-300">
      <img className="w-60 h-60 rounded-lg object-cover" src={srcImg}/>
      <div className="flex justify-between items-center mt-4">
        <span className="flex flex-col">
          <strong>{name}</strong>
          {description}
        </span>
        <p className="bg-gray-100 rounded px-4 py-2">
          ${value}
        </p>
      </div>
    </a>
  )
}