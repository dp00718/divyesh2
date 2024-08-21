import React from 'react';
import react, { useState, useEffect } from 'react';
import { MdExposurePlus1 } from "react-icons/md";
import { TbExposureMinus1 } from "react-icons/tb";
import './Header.scss'


const Header3 = () => {
    const [count, setCount] = useState(()=> {
        const savedCount = localStorage.getItem('count');
        return savedCount !== null ? parseInt(savedCount) : 0;
      });
      useEffect(() => {
        localStorage.setItem('count', count);
      }, [count]);

      const Incrementcount = () =>{
        setCount(count+1);
      }
      const Incrementcount1 = () =>{
        setCount(count-1);
      }
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={Incrementcount}><MdExposurePlus1  className='icon1'/> </button>
        <button onClick={Incrementcount1}><TbExposureMinus1 className='icon1'/></button>

      </div>
    );
  }

export default Header3
