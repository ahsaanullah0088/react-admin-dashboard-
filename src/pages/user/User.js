import React from 'react'
import Sniper from '../../componenets/sniper/Sniper'
import { singleUser } from '../../data'

const User = () => {
  return (
    <div>
      <Sniper {...singleUser}/>
    </div>
  )
}

export default User
