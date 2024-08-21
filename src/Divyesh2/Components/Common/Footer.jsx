import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import './Footer.css'


const Footer = () => {

  const openLink = () =>{
    window.open('https://www.facebook.com','_blank')
  };
  const openLink1 = () =>{
    window.open('https://www.youtube.com/','_blank')
  };
  const openLink2 = () =>{
    window.open('https://www.instagram.com/','_blank')
  };
  const openLink3 = () =>{
    window.open('https://github.com/','_blank')
  };
  return (
    <div className='footer-main'>
      <div className='footer1'>
        <li>About</li>
        <li>Blog</li>
        <li>Jobs</li>
        <li>Press</li>
        <li>Accessibility</li>
        <li>Parteners</li>
      </div>
      <div className='footer-icons'>
        <div className='footer-icons1'>
        <button onClick={openLink}><FaFacebook className='icon'/></button>
        <button onClick={openLink2}><FaInstagram className='icon' /></button>
        <button onClick={openLink1}><SiYoutubeshorts className='icon' /></button>
        <button onClick={openLink3}><VscGithub className='icon'/></button>
        </div>
      </div>
      <div className='footer-bottom'>
      © 2020 Your Company, Inc. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
