import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'react-modern-drawer';
import { IoMdCloseCircle } from "react-icons/io";
import Button from '@mui/material/Button';
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import "../Drawer/Drawer.scss"
import '../Styles/Htmlsite.css'
import { IoCloseSharp } from "react-icons/io5";
import 'react-modern-drawer/dist/index.css'
import { BsQuestionCircleFill } from "react-icons/bs";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Cart from '@react-providers/cart';
import { CartProvider } from 'react-use-cart';
import Cart1 from '../Cart/Cart';



const Headerhtml1 = () => {
    const [isopen1,setIsOpen1] = useState(false)
   

const [isVisible1, setIsVisible1] = useState(false);
const [isVisible2, setIsVisible2] = useState(false);

const Header1Visibility1 = () => {setIsVisible1(!isVisible1); setIsVisible2(false)};
const Header1Visibility2 = () => {setIsVisible2(!isVisible2); setIsVisible1(false)};

const [modal, setModal] = useState(false)
const handlebar5 = () =>{setModal(true)}
const handlebar6 = () =>{setModal(false)}

  return (
    <>

<div className='head-main'>

<div className='left'>
<div className='submit'>
<Button variant="contained" color="success" className="headersub2" onClick={handlebar5}><FaBars />
</Button>

</div>


</div>

<div className='center'>
    <h1>G.K.P</h1>
</div>

<div className='right'>
<div className='right-world'>
    <button className='cart' onClick={() => setIsOpen1(true)}><MdOutlineShoppingCartCheckout  className='cart-1'/>
</button>
{/* <div className='cart2'> */}
 {isopen1 && <Cart1 setIsOpen1={setIsOpen1}/>}
 {/* </div> */}
</div>

      
<div>
<Button variant="contained" className='modal' onClick={Header1Visibility1}>Login</Button>
{modal ?
          <Drawer
          size={300}
          
          open={modal}
          onClose={setModal}
          direction='right'
          duration={1000}
          className='bla bla bla'
          overlayOpacity={0.5}
          overlayColor="rdba"
          lockBackgroundScroll={true}
      >
<div className='drawer-1'>
<div>Hello World</div>
<div onClick={handlebar6} className='drawer-close'><IoMdCloseCircle style={{width:'30px', height:'30px'}}/></div> 
</div>
</Drawer>:null}  
</div>
        
</div>
 
</div>
<div className='headersub22' style={{ display: isVisible1 ? 'block' : 'none'}} id='headersub22'>
            <div className='close' onClick={Header1Visibility1}> <IoCloseSharp className='icon' /></div> 
            <div className='headersub11'>
                <input className='input1' type="text" placeholder="Username" style={{border:'1px solid white'}}/>
                </div>
            <div className='headersub12'>
                <input className='input1' type="text" placeholder="Password" style={{border:'1px solid white'}}/>
                </div>
            <div className='headersub13'>
            <button class="btn btn-primary" type="submit">Login </button><br/>
             <button1 className='forgotpassword' onClick={Header1Visibility2}>Forgot Password <BsQuestionCircleFill/></button1>
             </div>
            <div className='headersub14'>New user ? <a href="https://vhxview.com/">register</a></div>
  
            </div>
            <div className='forgotpassword1' style={{ display: isVisible2 ? 'block' : 'none' }}> Forgot Password Can Be Reset Here
            <div className='close' onClick={Header1Visibility1}> <IoCloseSharp className='icon' /></div>
            
            </div>


 </>
 
  )
}

export default Headerhtml1;
