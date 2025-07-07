import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Sign from "./pages/Sign.jsx";


import ui from '/1ui.png';
import ui1 from '/2ui.png';
import ui2 from '/3ui.png';
import ui3 from '/4ui.png';
import ui4 from '/5ui.png';
import ui5 from '/6ui.png';
import ui6 from '/7ui.png';
import video from '/mov_bbb.mp4';
import Shinchan from '/shinchan.jpg';
import ChottaBheem from '/chotta.jpg';
import Doraemon from '/doraemon.jpg';
import poke from '/poke.jpg';
import dragon from '/dragon.jpeg';
import ninja from '/ninja.jpeg';

export default function App() {
  return (
    <Routes>
      <Route path="/sign" element={<Sign />} />
      <Route path="*" element={
        <div className="div">
          <center><h1 className="box">Welcome to Gopika cartoon network</h1></center>
          <img className="uiimage" src={ui} width={50} height={50} />
          <h1 className="name">Gopika cartoonnetwork</h1>

          <select className="dropdown">
            <option value="">Template</option>
            <option value="option1">business site template</option>
            <option value="option2">saas land pages</option>
            <option value="option3">portfolio template</option>
          </select>
          <select className="dropdown">
            <option value="">Resource</option>
            <option value="option1">Blog</option>
            <option value="option2">Docs</option>
          </select>
          <button className="support">Support</button>
          <img className="logo" src={ui3} width={50} height={50} />
          <img className="logo1" src={ui4} width={50} height={50} />
          <img className="logo2" src={ui5} width={50} height={50} />
          <img className="logo3" src={ui6} width={50} height={50} />
          <input className="search" type="search" placeholder="search 🔍" />

          <Link to="/sign" className="signin">
            <img src={ui2} width={50} height={50} /> sign up
          </Link>

          <img className="cart" src={ui1} width={45} height={45} /><hr />

          <center>
            <h1>Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film</h1>
            <video className="video" width="400" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </center>

          <hr />
          <h1>Services</h1>
          <div className="container">
            <div className="s"><img className="Shinchan" src={Shinchan} width={180} height={180} />
              <h3 className="shintext">Shinchan Nohara ❤️ (@shin__chan__)</h3></div>
            <div className="s"><img className="ChottaBheem" src={ChottaBheem} width={280} height={180} />
              <h3 className="shintext">Download Chhota Bheem Wallpapers</h3></div>
            <div className="s"><img className="Doraemon" src={ninja} width={180} height={180} />
              <h3 className="shintext">Learn from Ninja Hattori</h3></div>
            <div className="s"><img className="s" src={Doraemon} width={180} height={180} />
              <h3 className="shintext">Doraemon and Nobita wall decor</h3></div>
            <div className="s"><img className="s" src={poke} width={180} height={180} />
              <h3 className="shintext">Pokémon Paw Pod is here!</h3></div>
            <div className="s"><img className="s" src={dragon} width={180} height={180} />
              <h3 className="shintext">Dragon Booster Book</h3></div>
          </div>
          <hr />
          <footer className="footer">
            <center>
              <p>Author: Gopika</p><br />
              website: <a href="https://Gopizza.com">gopizza.com</a><br />
              contact: gopika@gmail.com
            </center>
          </footer>
        </div>
      } />
    </Routes>
  );
}
