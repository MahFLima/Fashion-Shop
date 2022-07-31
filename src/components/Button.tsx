import classNames from 'classnames';
import { useState } from 'react';

type Props = {
  title: string;
}

export function Button({title}: Props){

  const [isActive,setIsActive] = useState(true)
  return(
    <button className={classNames(" text-gray-400 text-lg py-4 px-6 rounded hover:bg-purple-400 hover:text-white", "bg-purple-400" ? isActive : "bg-gray-100")}>
      {title}
    </button>
  )
}