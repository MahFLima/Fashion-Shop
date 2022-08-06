import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { MenuMobile } from '../components/MenuMobile';

export const HomePage: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()

  function handleClick() {
    isActive ? setIsActive(false) : setIsActive(true)
  }

  return (
    <div className='flex flex-col gap-8 justify-between'>
      <Header onClick={ handleClick } />
      {isActive ? (<MenuMobile/>) :
        (
          <>
            <Main/>
            <Footer />
          </>
        )}

    </div>
  );
}

