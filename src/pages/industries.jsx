import React from "react";
//import {industrieData} from "../data/index.js";

const Industries = () => {
  return <>
  <section 
    style={{
      backgroundColor:'#000',
      backgroundImage:'url("../../public/assets/images/bkg-industries.png")',
      //backgroundSize:'cover',
      //backgroundPosition:'left',
      backgroundPositionX:'right',
      minHeight:'100vh'
    }}
    className="industries">
    {/* <img style={{width:'100vw', height:'100vh'}} src="../../public/assets/images/bkg-industries.png" alt="" /> */}
    <div className="container">
      <div className="subtitle">
        <h2>Industries</h2>
        <p>Codefend is your comprehensive solution for all your company's security needs. Our application combines a wide range of services designed to protect your organization from cyber threats, ensuring the highest level of protection for your data & infrastructure.</p>
      </div>
    </div>
  </section>
 </>;
};

export default Industries;
