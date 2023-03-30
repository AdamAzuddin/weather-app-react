import React from 'react';
import Searchbar from './Searchbar';

const Header = ({ onLocationSelect }) => {

  return (
    <header>
      <Searchbar onLocationSelect={onLocationSelect}/>
    </header>
  );
};

export default Header;
