import React from 'react';
import Searchbar from './Searchbar';

const Header = ({ onLocationSelect }) => {

  return (
    <header>
      <div>SkyCast</div>
      <Searchbar onLocationSelect={onLocationSelect}/>
    </header>
  );
};

export default Header;
