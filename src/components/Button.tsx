
type Props = {
  title: string;
}

export function Button({title}: Props){
  return(
    <button className="text-gray-400 bg-gray-100 text-lg py-4 px-6 rounded hover:bg-purple-400 hover:text-white">
      {title}
    </button>
  )
}