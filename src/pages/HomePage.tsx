import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ListProducts } from '../components/ListProducts';
import { Main } from '../components/Main';
import { MenuMobile } from '../components/MenuMobile';

export const HomePage: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()

  function handleClick() {
    isActive ? setIsActive(false) : setIsActive(true)
  }

  function handleNavigation(){
    setIsActive(false)
  }
  return (
    <div className='flex flex-col gap-8'>
      <Header onClick={ handleClick } />
      {isActive ? (<MenuMobile click={() => {handleNavigation()}} />) :
        (
          <>
            <Main/>
            <Footer />
          </>
        )}

    </div>
  );
}

