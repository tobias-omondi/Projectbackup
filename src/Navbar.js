
import { ShoppingCart } from 'phosphor-react';
import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <h3><Link to ="/">Home</Link></h3>
        <h3><Link to ="/login">Login</Link></h3>
        <h3><Link to="/cart"><ShoppingCart size={20}/></Link></h3>
      </div>
    </div>
  );
}

export default Navbar;
