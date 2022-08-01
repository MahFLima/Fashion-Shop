import classNames from 'classnames';
import { useState } from 'react';

type Props = {
  title: string;
  slide: string;
  click: () => void;
}

export function Button({title, slide, click}: Props){

  return(
  <button onClick={click}>
    <input type="radio" name="slide" id={slide} className="hidden" checked/>
    <label htmlFor={slide} className={classNames(" text-gray-400 text-lg py-4 px-6 rounded hover:bg-purple-400 hover:text-white", slide)}>
      {title}
    </label>
  </button>
  )
}