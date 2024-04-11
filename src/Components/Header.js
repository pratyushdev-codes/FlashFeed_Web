import React from 'react';
import './text.css'; // Import the CSS file

function Header() {
  return (
    <div>
      <div className="image-container">
        <img
          src="./images/3.png"
          className="img-fluid"
          alt="fdf."
          style={{
            borderBottomRightRadius: '20px',
            borderBottomLeftRadius: '20px'
          }}
        />
        <div className="text-overlay">
          <h1 style={{fontWeight:"bolder"}}>FlashFeed.</h1>
          <p></p>
        </div>
      </div>
      <br />
      <br />
      <img
        src="./images/4.png"
        className="img-fluid"
        alt="fdf."
        style={{ borderRadius: '20px' }}
      />
    </div>
  );
}

export default Header;