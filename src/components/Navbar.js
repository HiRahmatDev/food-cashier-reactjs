import React from 'react';

function Navbar () {
  return (
    <nav>
      <div>
        <button class="burger">
          <img src={ require('../assets/img/menu.png') } alt="" />
        </button>
        <h1>Food Items</h1>
        <div>
          <button class="search">
            <img src={ require('../assets/img/magnifying-glass.png') } alt="menu" />
          </button>
          <button  class="trolly">
            <img src={ require('../assets/img/shopping-cart.png') } alt="" />
            <div class="badge-cart">12</div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
