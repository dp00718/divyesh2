import React from 'react'
import './Header.scss'
import { IoCloseSharp } from "react-icons/io5";
import react, {useState} from "react";




const Header1 = () => {
  
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const Header1Visibility1 = () => {setIsVisible1(!isVisible1); setIsVisible2(false)};
  const Header1Visibility2 = () => {setIsVisible2(!isVisible2); setIsVisible1(false)};

    return (
      <div className='main'>
      <header className="header">
        <h1 className="header-title">Development</h1>

          <div className="headersub">
            
            <div className="headersub1"><a href="#">Home</a></div>
            <div className="headersub1"><a href="#">About</a></div>
            <div className="headersub1"><a href="#">Contact</a></div>
            <button className="headersub2" onClick={Header1Visibility1}>Login </button>
          
            </div>

            
            </header>

            <div className='headersub22' style={{ display: isVisible1 ? 'block' : 'none'}} id='headersub22'>
            <div className='close' onClick={Header1Visibility1}> <IoCloseSharp className='icon' /></div> 
            <div className='headersub11'><input type="text" value='Username' placeholder=""/></div>
            <div className='headersub12'><input type="text" value='Password' placeholder=""/></div>
            <div className='headersub13'><button class="btn btn-primary" type="submit">Login </button>
            <button className='forgotpassword' onClick={Header1Visibility2}>Forgot Password    </button></div>
            <div className='headersub14'>New user ? <a href="https://vhxview.com/">register</a></div>
  
            </div>
            <div className='forgotpassword1' style={{ display: isVisible2 ? 'block' : 'none' }}> Forgot Password Can Be Reset Here
            <div className='close' onClick={Header1Visibility1}> <IoCloseSharp className='icon' /></div>
            </div>
             
            </div> 
      
    );
  }

export default Header1

