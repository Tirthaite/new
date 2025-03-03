import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="pi-browser">
        <div className="header">
          <div className="logo-container">
            <div className="pi-logo">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="#FBB03B" />
                <path d="M40 30 H60 M45 30 V70 M55 30 V70 M40 45 H55" stroke="#FBB03B" strokeWidth="8" fill="none" />
                <rect x="35" y="25" width="8" height="8" fill="#FBB03B" />
                <rect x="50" y="25" width="8" height="8" fill="#FBB03B" />
              </svg>
            </div>
          </div>
          <h1 className="title">Welcome to the Pi Browser</h1>
        </div>

        <div className="menu-grid">
          <div className="menu-item">
            <div className="icon-container purple">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12L10 10C11 9 13 9 14 10L16 12C17 13 17 15 16 16L14 18C13 19 11 19 10 18L8 16C7 15 7 13 8 12Z" fill="#663399" />
                <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8Z" fill="#663399" />
                <path d="M18 12C18 10.9 17.1 10 16 10C14.9 10 14 10.9 14 12C14 13.1 14.9 14 16 14C17.1 14 18 13.1 18 12Z" fill="#663399" />
                <path d="M12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20Z" fill="#663399" />
                <path d="M6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14Z" fill="#663399" />
              </svg>
            </div>
            <p>Fireside</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="6" width="18" height="12" rx="2" stroke="#663399" strokeWidth="2" />
                <path d="M12 11C13.1 11 14 10.1 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11Z" fill="#663399" />
                <path d="M7 12H17V16H7V12Z" fill="#663399" />
              </svg>
            </div>
            <p>Wallet</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V7" stroke="#663399" strokeWidth="2" strokeLinecap="round" />
                <path d="M18.364 5.636L16.243 7.757" stroke="#663399" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 12H17" stroke="#663399" strokeWidth="2" strokeLinecap="round" />
                <path d="M18.364 18.364L16.243 16.243" stroke="#663399" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 20V17" stroke="#663399" strokeWidth="2" strokeLinecap="round" />
                <path d="M5.636 18.364L7.757 16.243" stroke="#663399" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12H7" stroke="#663399" strokeWidth="2" strokeLinecap="round" />
                <path d="M5.636 5.636L7.757 7.757" stroke="#663399" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="4" fill="#663399" />
              </svg>
            </div>
            <p>Brainstorm</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" stroke="#663399" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="4" fill="#663399" />
              </svg>
            </div>
            <p>Mine</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="12" r="3" fill="#663399" />
                <circle cx="18" cy="12" r="3" fill="#663399" />
                <circle cx="12" cy="12" r="3" fill="#663399" />
                <line x1="9" y1="12" x2="15" y2="12" stroke="#663399" strokeWidth="2" />
              </svg>
            </div>
            <p>Blockchain</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#663399" strokeWidth="2" />
                <path d="M8 10L12 14L16 10" stroke="#663399" strokeWidth="2" />
              </svg>
            </div>
            <p>Develop</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="6" width="12" height="8" rx="1" stroke="#663399" strokeWidth="2" />
                <path d="M3 10H15" stroke="#663399" strokeWidth="2" />
                <circle cx="17" cy="15" r="4" fill="#663399" />
              </svg>
            </div>
            <p>KYC</p>
          </div>

          <div className="menu-item">
            <div className="icon-container purple">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4l-4 4-4-4H5a2 2 0 01-2-2V5z" stroke="#663399" strokeWidth="2" fill="none" />
              </svg>
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