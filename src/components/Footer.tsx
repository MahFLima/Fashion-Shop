import { ArrowUp, FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";

export function Footer(){
  return(
    <div className="flex justify-between items-center px-10 md:px-20 py-10 bg-purple-400 text-white">
      <ul className="flex gap-8">
        <li><a href="https://instagram.com" target="_blank"><InstagramLogo className="w-6 h-6 md:w-8 md:h-8" /></a></li>
        <li><a href="https://facebook.com" target="_black"><FacebookLogo className="w-6 h-6 md:w-8 md:h-8"/></a></li>
        <li><a href="https://twitter.com" target="_blank"><TwitterLogo className="w-6 h-6 md:w-8 md:h-8" /></a></li>
      </ul>
      <a href="#"><ArrowUp className="w-6 h-6 md:w-8 md:h-8"/></a>
    </div>
  )
}