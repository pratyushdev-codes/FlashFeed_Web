
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
      <br/>
      <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',

        textAlign:"center"
      }}>News at your glance</h2>
     <p style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
        textAlign:"center"
      }}>Have a look at FlashFeed!</p>
<Marquee
  fade={true}
  direction="left"
  reverse={false}
  pauseOnHover={false}
  className="" // pass class to change gap or speed
  innerClassName="" // pass class to change gap or speed
>
 
<div class="card" style={{width: "20rem" , borderRadius:"20px", alignItems:"center" ,backgroundColor:"#EFF3F6", borderColor:"whitesmoke"}}>
  <br/>
  <img src="./images/frame1.png" class="card-img-top" alt="..."  style={{width:"15rem", height:"15"}}/>
  <div class="card-body">

    <a href="#" class="btn btn-primary" style={{borderRadius:"20px",  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)'}}>Clean and Informative UI</a>
  </div>
</div>
<div class="card" style={{width: "20rem" , borderRadius:"20px", alignItems:"center" ,backgroundColor:"#EFF3F6", borderColor:"whitesmoke"}}>
  <br/>
  <img src="./images/frame2.png" class="card-img-top" alt="..."  style={{width:"15rem", height:"15"}}/>
  <div class="card-body">
   
    <a href="#" class="btn btn-primary" style={{borderRadius:"20px",  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)'}}>Trending News Section</a>
  </div>
</div>
<div class="card" style={{width: "20rem" , borderRadius:"20px", alignItems:"center" ,backgroundColor:"#EFF3F6", borderColor:"whitesmoke"}}>
  <br/>
  <img src="./images/frame3.png" class="card-img-top" alt="..." style={{width:"15rem", height:"15"}}/>
  <div class="card-body">
   
    <a href="#" class="btn btn-primary" style={{borderRadius:"20px",  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)'}}>Breaking News Section</a>
  </div>
</div>
<div class="card" style={{width: "20rem" , borderRadius:"20px", alignItems:"center" ,backgroundColor:"#EFF3F6", borderColor:"whitesmoke"}}>
  <br/>
  <img src="./images/frame4.png" class="card-img-top" alt="..."  style={{width:"15rem", height:"15"}}/>
  <div class="card-body">
   
    <a href="#" class="btn btn-primary" style={{borderRadius:"20px",  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)'}}>News based on User Intrest</a>
  </div>
</div>

<div class="card" style={{width: "20rem" , borderRadius:"20px", alignItems:"center" ,backgroundColor:"#EFF3F6", borderColor:"whitesmoke"}}>
  <br/>
  <img src="./images/frame5.png" class="card-img-top" alt="..." style={{width:"15rem", height:"15"}}/>
  <div class="card-body">
   
    <a href="#" class="btn btn-primary" style={{borderRadius:"20px",  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)'}}>Web View Enables News Sections</a>
  </div>
</div>

<div class="card" style={{width: "20rem" , borderRadius:"20px", alignItems:"center" ,backgroundColor:"#EFF3F6", borderColor:"whitesmoke"}}>
  <br/>
  <img src="./images/frame6.png" class="card-img-top" alt="..." style={{width:"15rem", height:"15"}}/>
  <div class="card-body">
   
    <a href="#" class="btn btn-primary" style={{borderRadius:"20px",  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)'}}>Other Information</a>
  </div>
</div>
</Marquee>
      <br />
    </div>
  );
}

export default Reviews;
