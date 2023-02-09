import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@mui/material'

function SidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar></Avatar>
      <div className="sidebarChat_info">
        <h1>Name</h1>
        <p>This is Chat</p>
      </div>
    </div>
  )
}

export default SidebarChat