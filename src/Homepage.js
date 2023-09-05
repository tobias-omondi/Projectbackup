import React, { useState, useEffect } from 'react';
import Cart from './Cart';

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const newItem = { id: product.id, name: product.title, price: product.price };
    const updatedCart = [...cartItems, newItem];
    setCartItems(updatedCart);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Fetch product data from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="homepage">
      <h1>Welcome to SHOPify</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className='image-container'>
              <img src={product.image} alt={product.title} />
            </div>
            
            <div className='parag'>
              <h3>{product.title}</h3>
              <div className='para'>
                <p>{product.description}</p></div>
              
              <p>Price: ${product.price}</p>
            </div>
           
            <button className='addbtn' onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Homepage;
