import React from 'react';
import react, { useState } from 'react';
import { BsCloudRainFill } from "react-icons/bs";



function Header4() {
    const [isOpen, setIsOpen] = useState(false);
    const [IsOpen1, setIsOpen1] = useState(false);
    const Header4setIsOpen = () => {setIsOpen(true)};
    const Header4setIsOpen1 = () => {setIsOpen(false)};
  
    return (
      <div>
           <button onClick={Header4setIsOpen}>Modal1</button>
          {isOpen &&(
            <div>
                <div><BsCloudRainFill /></div>
          <button onClick={Header4setIsOpen1}>Modal2</button>
          </div>)}
              
            {/* <button onClick={() => setIsOpen(true)}>Open Modal</button>
        {isOpen && (
          <div>
            <div>Modal Content</div>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
          </div>
        )} */}
     </div>
    );
  }

export default Header4
