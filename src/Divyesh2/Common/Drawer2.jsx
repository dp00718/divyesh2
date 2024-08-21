import React from 'react';
import Drawer from 'react-modern-drawer';
import '../Common/Drawer.scss';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import react, {useState} from 'react';

const Drawer2 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
      <>
          <button onClick={toggleDrawer}>Drawer</button>
          <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='right'
              className='hello1'
          >
              <div className='hello'>Hello World
              <ul className='list2'>
              <li className='list1'>Good Day</li>
              <li className='list1'>Good Morning</li>
              <li className='list1'>Good Afternoon</li>
              <li className='list1'>Good Evening</li>
              <li className='list1'>Good Night</li>
              </ul>
              </div>
          </Drawer>
      </>
  )
}

export default Drawer2
