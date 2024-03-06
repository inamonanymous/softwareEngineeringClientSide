import React from 'react';
import logo from './logo.svg';

const Header = () => {
  return (
    <header>
        <div>
            <img src={logo}/>
             <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Borrow Items</a></li>
                <li><a href='#'>About Us</a></li>
             </ul>
        </div>
    </header>
  );
};



export default Header;