import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://o.remove.bg/downloads/e9e7c785-2688-466b-8964-ddada3f991a8/tomato_header-removebg-preview.png"
        alt="tomato-logo"
        className="header-logo"
      />
      <div className="header-left">
        <div className="header-loaction-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-sr-marker"></i>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
