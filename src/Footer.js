import React from 'react';
import logo from './logo.svg';

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={logo}/>
             <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Borrow Items</a></li>
                <li><a href='#'>About Us</a></li>
             </ul>
        </div>
    </footer>
  );
};



export default Footer;