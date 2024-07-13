import React from 'react'
import './Navbar.scss'
function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src='logo.svg' alt=''/>
        <span>lamadmin</span>
      </div>
      <div className="icons">
        <img src='/search.svg' alt='' className='icon'/>
        <img src='/app.svg' alt='' className='icon'/>
        <img src='/expand.svg' alt='' className='icon'/>
        <div className="notification">
          <img src='/notifications.svg' alt=''/>
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/17838732/pexels-photo-17838732/free-photo-of-nature-field-animal-farm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          <span>Jane</span>
        </div>
        <img src='/settings.svg' alt='' className='icon'/>
      </div>
    </div>
  )
}

export default Navbar
