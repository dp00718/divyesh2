import React, { useState } from 'react'
import './Htmlsite.css'
import Coffee1 from '/react/divyesh3tailwind/src/Assets/Images/Coffee1.jpg';
import Coffee2 from '/react/divyesh3tailwind/src/Assets/Images/Coffee2.jpg';
import Coffee3 from '/react/divyesh3tailwind/src/Assets/Images/Coffee3.jpeg';
import Coffee4 from '/react/divyesh3tailwind/src/Assets/Images/Coffee4.jpeg';
import Colddrink1 from '/react/divyesh3tailwind/src/Assets/Images/Colddrink1.jpg';
import Colddrink2 from '/react/divyesh3tailwind/src/Assets/Images/Colddrink2.jpeg';
import Colddrink3 from '/react/divyesh3tailwind/src/Assets/Images/Colddrink3.jpeg';
import Colddrink4 from '/react/divyesh3tailwind/src/Assets/Images/Colddrink4.jpeg';
import fastfood1 from '/react/divyesh3tailwind/src/Assets/Images/fastfood1.jpeg';
import fastfood2 from '/react/divyesh3tailwind/src/Assets/Images/fastfood2.jpg';
import fastfood3 from '/react/divyesh3tailwind/src/Assets/Images/fastfood3.jpg';
import fastfood4 from '/react/divyesh3tailwind/src/Assets/Images/fastfood4.jpg';
import tea1 from '/react/divyesh3tailwind/src/Assets/Images/tea1.jpeg';
import tea2 from '/react/divyesh3tailwind/src/Assets/Images/tea2.jpeg';
import tea3 from '/react/divyesh3tailwind/src/Assets/Images/tea3.jpeg';
import tea4 from '/react/divyesh3tailwind/src/Assets/Images/tea4.jpeg';
import woodland1 from '/react/divyesh3tailwind/src/Assets/Images/woodland1.jpg';
import woodland2 from '/react/divyesh3tailwind/src/Assets/Images/woodland2.jpeg';
import woodland3 from '/react/divyesh3tailwind/src/Assets/Images/woodland3.jpg';
import woodland4 from '/react/divyesh3tailwind/src/Assets/Images/woodland4.jpg';
import Button from '@mui/material/Button';
import "./Drawer.scss"
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { IoMdCloseCircle } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/core/styles.scss';
import { FaSearch } from "react-icons/fa";


const Htmlsite = () => {
    const [show,setShow] = useState(false)
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const [show3,setShow3] = useState(false)
    const [show4,setShow4] = useState(false)

    const handlebar = () => {
        setShow(!show)
        setShow1(false)
        setShow2(false)
        setShow3(false)
        setShow4(false)
    }
    const handlebar1 = () => {
        setShow1(!show1)
        setShow(false)
        setShow2(false)
        setShow3(false)
        setShow4(false)
    }
    const handlebar2 = () => {
        setShow2(!show2)
        setShow1(false)
        setShow(false)
        setShow3(false)
        setShow4(false)
    }
    const handlebar3 = () => {
        setShow3(!show3)
        setShow1(false)
        setShow2(false)
        setShow(false)
        setShow4(false)
    }
    const handlebar4 = () => {
        setShow4(!show4)
        setShow1(false)
        setShow2(false)
        setShow3(false)
        setShow(false)
    }
const [modal, setModal] = useState(false)
const handlebar5 = () =>{
    setModal(true)
}
const handlebar6 = () =>{
    setModal(false)
}
const [isVisible1, setIsVisible1] = useState(false);
const [isVisible2, setIsVisible2] = useState(false);

const Header1Visibility1 = () => {setIsVisible1(!isVisible1); setIsVisible2(false)};
const Header1Visibility2 = () => {setIsVisible2(!isVisible2); setIsVisible1(false)};

const [isopen1,setIsopen1] = useState(false)

const handlebar7 = () =>{
    setIsopen1(!isopen1)
}

  return (
    <>
    <div className='main'>
    <div className='head-main'>

<div className='left'>
    
    <ul className='flex-container'>
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li> <Link to="/contact">Contact</Link></li>
        <li> <Link to="/service">Service</Link></li>
      </ul>

</div>

<div className='center'>
    <h1>Ui e-commerce</h1>
</div>

<div className='right'>

<div className='right-world'>

    <div>
<button className='search1' onClick={handlebar7}><FaSearch /></button>
    </div>

    <div className='submit'>
      
      <Button variant="contained" color="success" className="headersub2" onClick={Header1Visibility1}>Submit</Button>
                  </div>
                  </div>
      
      <div>
      <Button variant="contained" onClick={handlebar} className='modal' onClick={handlebar5}>Login</Button>
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
   
    <div className='main2'>
        <div className='main21'>
        <Button variant="contained" onClick={handlebar} >Home </Button>
       { show ? 
       <div className='home' >
        <table className='overlap'>
            <tr>
                <td>Home1</td>
                <td>Home2</td>
                <td>Home3</td>
            </tr>
        </table>
        </div>:null
}
    </div>
    <div className='main22'>
    <Button variant="contained" onClick={handlebar1}>About us</Button>
    { show1 ? 
        <div className='home' >
             <table className='overlap'>
            <tr>
                <td>About-Us1</td>
                <td>About-Us2</td>
                <td>About-Us3</td>
            </tr>
        </table>
        </div>:null
}
        </div>
        <div className='main23'>
        <Button variant="contained" onClick={handlebar2}>Services</Button>
        {show2 ? 
            <div className='home' >
             <table className='overlap'>
            <tr>
                <td>Service1</td>
                <td>Service2</td>
                <td>Service3</td>
            </tr>
        </table>
        </div>:null
}
        </div>
        <div className='main24'>
        <Button variant="contained" onClick={handlebar3}>Gallery</Button>
        {show3 ? 
            <div className='home' >
             <table className='overlap'>
            <tr>
                <td>Gallery1</td>
                <td>Gallery2</td>
                <td>Gallery3</td>
            </tr>
        </table>
        </div>:null
}
        </div>
        <div className='main25'>
        <Button variant="contained" onClick={handlebar4}>Contact us</Button>
        {show4 ? 
            <div className='home' >
             <table className='overlap'>
            <tr>
                <td>Contact1</td>
                <td>Contact2</td>
                <td>Contact3</td>
            </tr>
        </table>
        </div>:null
}
        </div>
    </div>
    <div className='main1'>
        
        <div className='sub'>       
       <div className='sub1'> <button>Click1</button></div>
        <div className='sub2'><button>Click2</button></div>
        <div className='sub3'><button>Click3</button></div>
    </div>
    <AwesomeSlider cssModule={AwsSliderStyles} style={{height:'300px',width:'100%'}} className='slider1'>
        <div className='first'><img src={woodland1} alt='' style={{height:'300px',width:'500px'}}/></div>
        <div className='first'><img src={woodland2} alt='' style={{height:'300px',width:'500px'}}/></div>
        <div className='first'><img src={woodland3} alt='' style={{height:'300px',width:'500px'}}/></div>
        <div className='first'><img src={woodland4} alt='' style={{height:'300px',width:'500px'}}/></div>
        </AwesomeSlider>
    </div>
    

    <div className='main3'>
<div className='main31'>
    <button>Coffee</button>
    
</div>
<div className='main32'>
    <button>Colddrink</button>
    
</div>
<div className='main33'>
    <button>Fastfood</button>
    
</div>
<div className='main34'>
    <button>Tea</button>
 
</div>
<div className='main35'>
    <button>All</button>
</div>
</div>

    <div className='main4'>


<div className='main311'>
    <img src={Coffee1} alt='' style={{height:'180px',width:'190px'}}/>
    <img src={Coffee2} alt='' style={{height:'180px',width:'190px'}} />
    <img src={Coffee3} alt='' style={{height:'180px',width:'190px'}} />
    <img src={Coffee4} alt='' style={{height:'180px',width:'190px'}} />
</div>
<div className='main321'>
    <img src={Colddrink1} alt='' style={{height:'180px',width:'190px'}} />
    <img src={Colddrink2} alt='' style={{height:'180px',width:'190px'}} />
    <img src={Colddrink3} alt='' style={{height:'180px',width:'190px'}} />
    <img src={Colddrink4} alt='' style={{height:'180px',width:'190px'}} />
</div>
<div className='main331'>
    <img src={fastfood1} alt='' style={{height:'180px', width:'190px'}} />
    <img src={fastfood2} alt='' style={{height:'180px',width:'190px'}} />
    <img src={fastfood3} alt='' style={{height:'180px',width:'190px'}} />
    <img src={fastfood4} alt='' style={{height:'180px',width:'190px'}} /> 
</div> 
<div className='main341'>
    <img src={tea1} alt='' style={{height:'180px',width:'190px'}}/>
    <img src={tea2} alt='' style={{height:'180px',width:'190px'}}/>
    <img src={tea3} alt='' style={{height:'180px',width:'190px'}}/>
    <img src={tea4} alt='' style={{height:'180px',width:'190px'}}/>    
</div>
<div className='main351'>
    <img src={Coffee1} alt='' style={{height:'180px',width:'190px'}}/>
    <img src={Colddrink1} alt='' style={{height:'180px',width:'190px'}}/>
    <img src={fastfood1} alt='' style={{height:'180px',width:'190px'}}/>
    <img src={tea1} alt='' style={{height:'180px',width:'190px'}}/> 
</div>
</div>

<div>
<div className='headersub22' style={{ display: isVisible1 ? 'block' : 'none'}} id='headersub22'>
            <div className='close' onClick={Header1Visibility1}> <IoCloseSharp className='icon' /></div> 
            <div className='headersub11'>Username : <input type="text" placeholder="Name" style={{border:'1px solid black'}}/></div>
            <div className='headersub12'>Password : <input type="text" placeholder="Password" style={{border:'1px solid black'}}/></div>
            <div className='headersub13'><button class="btn btn-primary" type="submit">Login </button>
            <button className='forgotpassword' onClick={Header1Visibility2}>Forgot Password    </button></div>
            <div className='headersub14'>New user ? <a href="https://vhxview.com/">register</a></div>
  
            </div>
            <div className='forgotpassword1' style={{ display: isVisible2 ? 'block' : 'none' }}> Forgot Password Can Be Reset Here
            <div className='close' onClick={Header1Visibility1}> <IoCloseSharp className='icon' /></div>
            </div>
            </div>


 <div className='search' style={{display: isopen1 ? 'block' : 'none'}}> Search</div>  

    </div>
    </>
  )
}

export default Htmlsite
