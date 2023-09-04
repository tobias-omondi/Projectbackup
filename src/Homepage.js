import React, { useState, useEffect } from 'react';
import Cart from './Cart';

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

 
  const addToCart = (product, index) => {
    const newItem = { id: index, name: product.product_name, price: product.unit_price };
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
    
    fetch('http://ecommerce.muersolutions.com/api/v1/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="homepage">
      <h1>Welcome to SHOPify</h1>
        <div className="products">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className='image-container'>
                <img src={product.product_thumbnail} alt={product.product_name} />
              </div>
              <div>
                <h3>{product.product_name}</h3>
                <p>{product.product_description}</p>
                <p>Price: ${product.unit_price}</p>
              </div>
              <button onClick={() => addToCart(product, index)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Homepage;
