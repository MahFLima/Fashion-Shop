import React from 'react';
import { Header } from '../components/Header';
import { ListProducts } from '../components/ListProducts';
import { Main } from '../components/Main';

export const HomePage: React.FC = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Header/>
      <Main/>
      <ListProducts/>
    </div>
  );
}

