
import React from "react";
import './Sign.css';
import phone from '/phone.png';
import micro from '/micro.png';
import google from '/google.png';

export default function Sign() {
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h1>Welcome to Gopika Cartoon Network</h1>
      <input className="email" type="email" placeholder="Email@gmail.com"></input><br />
      <button className="con">Continue</button>
      <p>Don't have an account?</p>
      <p className="account">Sign up</p>
      <p>OR</p>
      <button className="con1"><img className="i1" src={phone} width={20} height={20} />Continue with phone</button><br />
      <button className="con2"><img className="i2" src={google} width={20} height={20} />Continue with google</button><br />
      <button className="con3"><img className="i3"src={micro} width={20} height={20} />Continue with microsoft</button><br />
     
    </div>
  );
}
