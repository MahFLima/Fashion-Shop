import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ListProducts } from '../components/ListProducts';
import { Main } from '../components/Main';
import { MenuMobile } from '../components/MenuMobile';

export const ListProductPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false)

  function handleClick() {
    isActive ? setIsActive(false) : setIsActive(true)
  }

  return (
    <div className='flex flex-col gap-8'>
      <Header onClick={ handleClick } />
      {isActive ? (<MenuMobile/>) :
        (
          <>
            <ListProducts />
            <Footer />
          </>
        )}

    </div>
  );
}