import React, { useState } from 'react';
import MobileHeader from './MobileHeader';
import NavBar from './NavBar';

function Header() {
  const [menu, setMenu] = useState(true);

  const handleShowMenu = () => {
    setMenu(false);
  };

  const handleHideMenu = () => {
    setMenu(true);
  };

  const listItems = [
    { "name": "THIS MONTH" },
    { "name": "SKIN" },
    { "name": "HAIR" },
    { "name": "BATH" },
    { "name": "SALE" },
  ]

  return (
    <>
      {menu ? (
        <NavBar 
          listItems={listItems}
          handleShowMenu={handleShowMenu}
        />
      ) : (
        <MobileHeader 
          listItems={listItems} 
          handleHideMenu={handleHideMenu} 
        />
      )}
    </>
  )
};

export default Header;