import React, { useState, useEffect} from 'react';
import './App.css';
import Button from './componentes/Button';
import Sidebar from './componentes/sidebar';
import Header from './componentes/header';
import Card from './componentes/Card';
import { PRODUCTS } from './constant/products';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const onHandlerCart = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container">
      <Sidebar onClose={onHandlerCart} isOpen={isOpen} />
      <Header numbersOfItems={0} onHandlerCart={onHandlerCart} />
      <h1>Productos</h1>
        <div className='products-container'>
      </div>
    </div>
  );
}

export default App;