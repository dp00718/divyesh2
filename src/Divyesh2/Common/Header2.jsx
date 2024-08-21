import React, { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import './Drawer.scss'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Header2 = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer1 = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
      <>
          <button onClick={toggleDrawer1}>Responsive</button>
          <Modal
              open={isOpen}
              onClose={toggleDrawer1}
              direction='right'
              className='drawer2'
          >
              <div className='drawer1'>
                <ul>
                  <li className>what a world</li>
                  <li>look like beuatiful</li>
                  <li>hungry people</li>
                  <li>human being</li>
                  <li>nature and animal</li>
                </ul>
              </div>
          </Modal>
      </>
  )
}

export default Header2

