
import React from 'react';
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
function Reviews() {

  
  const HeadingStyle={
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.7)',

    textAlign: "center"
  }
  
  const contentstyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.5)',

    textAlign: "left"
  }

  return (
    <div style={{ backgroundColor: "#F5F3F4", borderRadius: "30px 0 0 0", marginLeft: "px" }}>
      <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
        textAlign:"center"
      }}>News at your glance</h2>
     <p style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
        textAlign:"center"
      }}>Have a look at FlashFeed!</p><br />

<Marquee
  fade={true}
  direction="left"
  reverse={false}
  pauseOnHover={false}
  className="" // pass class to change gap or speed
  innerClassName="" // pass class to change gap or speed
>
 
<div class="card" style={{width: "20rem" , borderRadius:"20px", alignItems:"center" , borderColor:"white"}}>
  <br/>
  <img src="./images/frame1.png" class="card-img-top" alt="..."  style={{width:"18rem", height:"15"}}/>
  <div class="card-body">
   
    <a href="#" class="btn btn-primary" style={{borderRadius:"20px"}}>Go somewhere</a>
  </div>
</div>
  
<div class="card"  style={{width: "20rem" , borderRadius:"20px", alignItems:"center", borderColor:"white"}}>
  <br/>
  <img src="./images/frame2.png" class="card-img-top" alt="..."  style={{width:"18rem", height:"15"}}/>
  <div class="card-body">
   
    <a href="#" class="btn btn-primary" style={{borderRadius:"20px"}}>Go somewhere</a>
  </div>
</div>
        
        

<div class="card" style={{width: "20rem" , borderRadius:"20px", alignItems:"center", borderColor:"white"}}>
  <br/>
  <img src="./images/frame3.png" class="card-img-top" alt="..." style={{width:"18rem", height:"15"}}/>
  <div class="card-body">
   
    <a href="#" class="btn btn-primary" style={{borderRadius:"20px"}}>Go somewhere</a>
  </div>
</div>


<div class="card"  style={{width: "20rem" , borderRadius:"20px", alignItems:"center", borderColor:"white"}}>
  <br/>
  <img src="./images/frame4.png" class="card-img-top" alt="..."  style={{width:"18rem", height:"15"}}/>
  <div class="card-body">
   
    <a href="#" class="btn btn-primary" style={{borderRadius:"20px"}}>Go somewhere</a>
  </div>
</div>

<div class="card"  style={{width: "20rem" , borderRadius:"20px", alignItems:"center", borderColor:"white"}}>
  <br/>
  <img src="./images/frame5.png" class="card-img-top" alt="..." style={{width:"18rem", height:"15"}}/>
  <div class="card-body">
   
    <a href="#" class="btn btn-primary" style={{borderRadius:"20px"}}>Go somewhere</a>
  </div>
</div>




</Marquee>
      
      

      <br />
    </div>

  );
}

export default Reviews;
