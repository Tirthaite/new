import { useState } from 'react'
import './App.css'
import pi_logo from "./assets/pi_logo.png";
import kyc_logo from "./assets/kyc_logo.png";
import Blockchian_logo from "./assets/Blockchian_logo.png";
import brainstorm_logo from "./assets/brainstorm_logo.png";
import chatlogo from "./assets/chatlogo.png";
import develop_logo from "./assets/develop_logo.png";
import fireside_logo from "./assets/fireside_logo.png";
import Mine_logo from "./assets/Mine_logo.png";
import wallet_logo from "./assets/wallet_logo.png";

function App() {
  return (
    <>
      <div className="pi-browser">
        <div className="header">
          <div className="logo-container">
            <div className="pi-logo">
            <img src={pi_logo} alt="Pi Logo" />
            </div>
          </div>
          <h1 className="title">Welcome to the Pi Browser</h1>
        </div>

        <div className="menu-grid">
          <div className="menu-item">
            <div className="icon-container purple">
            <img src={fireside_logo} alt="Pi Logo" />
            </div>
            <p>Fireside</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
            <img src={wallet_logo} alt="Pi Logo" />
            </div>
            <p>Wallet</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
            <img src={brainstorm_logo} alt="Pi Logo" />
            </div>
            <p>Brainstorm</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
            <img src={Mine_logo} alt="Pi Logo" />
            </div>
            <p>Mine</p>
          </div>

          <div className="menu-item">
          
            <div className='block_classs'>
            <img src={Blockchian_logo} alt="Pi Logo" />
            </div>
           
          
            <p>Blockchain</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
            <img src={develop_logo} alt="Pi Logo" />
            </div>
            <p>Develop</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
            <img src={kyc_logo} alt="Pi Logo" />
            </div>
            
            <p>KYC</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
            <img src={chatlogo} alt="Chat" />
            </div>
            <p>Chat</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="#663399" strokeWidth="2" fill="none" />
                <path d="M6 21v-2a6 6 0 0112 0v2" stroke="#663399" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <p>Profiles</p>
          </div>
        </div>

        <div className="explore-button">
          <div className="explore-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" fill="none" />
              <path d="M15 9L9 15" stroke="white" strokeWidth="2" />
              <path d="M9 9L15 15" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <span>Explore the Ecosystem</span>
        </div>
      </div>
    </>
  )
}

export default App