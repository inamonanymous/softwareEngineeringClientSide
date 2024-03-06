import React from 'react';
import bannerImg from './img/banner-img.jpg';
import searchIcom from './img/icons8-search.svg';
import plusIcon from './img/plusIcon.svg';
import minusIcon from './img/minusIcon.svg';
import stephenPic from './img/stephenPic.png';
const Body = () => {
  return (
    <body>
        <section id='bannerSection'>
            <div>
                <div>
                    <h1>Digital Sports Equipment Monitoring </h1>
                    <h4>for SVCC Students</h4>
                </div>
                <img src={bannerImg} />
            </div>
        </section>
        <section id='dashboardSection'>
            <div>
                <div class='row1'>
                    <div class="smallBox">
                        <h5>Pending Items</h5>
                        <h3>99</h3>
                    </div>
                    <div class="smallBox">
                        <h5>Available Items</h5>
                        <h3>99</h3>
                    </div>
                    <div class="smallBox">
                        <h5>Borrowed Items</h5>
                        <h3>99</h3>
                    </div>
                </div>
                <div class='row2'>
                    <div class="smallBox">
                        <h5>Pending Items</h5>
                        <h3>99</h3>
                    </div>
                    <div class="bigBox">
                        <h5>Available Items</h5>
                        <h3>99</h3>
                    </div>
                    <div class="smallBox">
                        <h5>Borrowed Items</h5>
                        <h3>99</h3>
                    </div>
                </div>
            </div>
        </section>
        <section id='borrowSection'>
            <div>
                <h2>Borrow Item\s</h2>
                <h6>Begin by reviewing the available items listed on the screen. For each item, use the plus button to increase the quantity and the minus button to decrease it. Make sure to adjust the quantities according to your borrowing needs. If you wish to start over, utilize the "Clear" button to reset all quantities to zero.</h6>
                <h6>Next, carefully verify the quantities for each item before proceeding to submission. Ensure that the quantity for each selected item is greater than zero. Once you've confirmed the quantities, click the "Submit" button to finalize your borrowing request. If successful, the system will process your request accordingly.</h6>
                <div id='selectItemForm'>
                    <ul>
                        <li><h3>Select item\s</h3></li>
                        <li><a href='#'>Clear</a></li>
                    </ul>
                    <form>
                        <div>
                            <input  />
                            <img src={searchIcom}/>
                        </div>
                        <ul>
                            <li>
                                <h4>Item</h4>
                                <p>Qty <span>0</span></p>
                                <div>
                                    <a href='#'><img src={minusIcon}/></a>
                                    <a href='#'><img src={plusIcon}/></a>
                                </div>
                            </li>                            
                            <li>
                                <h4>Item</h4>
                                <p>Qty <span>0</span></p>
                                <div>
                                    <a href='#'><img src={minusIcon}/></a>
                                    <a href='#'><img src={plusIcon}/></a>
                                </div>
                            </li>                            
                            <li>
                                <h4>Item</h4>
                                <p>Qty <span>0</span></p>
                                <div>
                                    <a href='#'><img src={minusIcon}/></a>
                                    <a href='#'><img src={plusIcon}/></a>
                                </div>
                            </li>                            
                            <li>
                                <h4>Item</h4>
                                <p>Qty <span>0</span></p>
                                <div>
                                    <a href='#'><img src={minusIcon}/></a>
                                    <a href='#'><img src={plusIcon}/></a>
                                </div>
                            </li>                            
                            <li>
                                <h4>Item</h4>
                                <p>Qty <span>0</span></p>
                                <div>
                                    <a href='#'><img src={minusIcon}/></a>
                                    <a href='#'><img src={plusIcon}/></a>
                                </div>
                            </li>                            
                        </ul>
                        <button type='submit'><h6>Submit</h6></button>
                    </form>
                </div>
            </div>
        </section>
        <section id='aboutSection'>
            <h2>About Us</h2>
            <div>
                <div>
                    <img src={stephenPic}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h6>Stephen Joaquin Aguilar</h6>
                    <p>Software Engineer</p>
                </div>
                <div>
                    <img src={stephenPic}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h6>Stephen Joaquin Aguilar</h6>
                    <p>Software Engineer</p>
                </div>
                <div>
                    <img src={stephenPic}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h6>Stephen Joaquin Aguilar</h6>
                    <p>Software Engineer</p>
                </div>
            </div>
        </section>
    </body>
  );
};

export default Body;