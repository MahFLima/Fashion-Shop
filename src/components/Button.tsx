import classNames from 'classnames';
import { useState } from 'react';

type Props = {
  title: string;
  name: string
  slide: string;
  click: () => void;
}

export function Button({title, slide, click, name}: Props){

  return(
  <>
    <input type="radio" name={name} id={slide} className="hidden" defaultChecked={true}/>
    <label onClick={click} htmlFor={slide} className={classNames("text-base text-gray-400 bg-gray-100 py-4 px-6 rounded hover:bg-purple-400 hover:text-white", slide)}>
      {title}
    </label>
  </>
  )
}