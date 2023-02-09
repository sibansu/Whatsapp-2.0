import React from 'react'
import "./Sidebar.css"
// import DonutLargeIcon from "@mui/icons-material"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Avatar } from '@mui/material';
import SidebarChat from '../SidebarChat/SidebarChat';
function Sidebar() {
  return (
    <div className="Sidebar">
        <div className="sidebar_header">
            <Avatar></Avatar>
            <div className="sidebar_header_right">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
        <div className="sidebar_search">
             {/* <input type="text" name="" id="" /> */}
             <div className="sidebar_searchContainer">
                <SearchOutlinedIcon /> 
                <input type="text" name="" placeholder='Search or start a new chat' id="" />
             </div>
        </div>
        <div className="search_chats">
            <SidebarChat></SidebarChat>
            <SidebarChat></SidebarChat>
            <SidebarChat></SidebarChat>
            <SidebarChat></SidebarChat>
            <SidebarChat></SidebarChat>
        </div>
    </div>
  )
}

export default Sidebar