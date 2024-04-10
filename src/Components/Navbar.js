
import React from 'react';


function Navbar() {
 


  return (
    <div>    
      <nav className="navbar navbar-expand-lg bg-body-dark" style={{ position: "fixed", zIndex: "999", width: "100%" }}>
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="#"><img src="./images/icon.png" style={{ height: "60px", width: "60px" ,borderRadius:"4px" }} alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active mx-2" href="#"  style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2" href="#"  style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>About Us</a>
              </li>
             
              
             

              
            </ul>
            <div className="d-flex flex-column flex-lg-row">
            
            <button className="btn btn-glow mx-2" style={{ borderRadius:"20px", backgroundColor:"#FFC200"}}>Download Now</button>

            
             <button className="btn btn-primary mx-2" style={{ borderRadius:"20px", backgroundColor:"#036EFD" }}>Contact Us</button> 
      
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;