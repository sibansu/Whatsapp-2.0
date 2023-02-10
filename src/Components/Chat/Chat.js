import React from 'react'
import "./Chat.css"
import InsertEmoticonSharpIcon from '@mui/icons-material/InsertEmoticonSharp';
import { Avatar, IconButton } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Chat() {
  return (
    <div className="Chat">
      <div className="chat_header">
        <Avatar></Avatar>
        <div className="chat_header_info">
          <h3>Friend's name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className='chat_message'>
          <span className="chat_name">Sibansu</span>
          This is a message 
          <span className="chat_time">
            {new Date().toUTCString()}
          </span>
        </p>
        <p className='chat_message chat_receiver'>
          <span className="chat_name">Sibansu</span>
          This is a message 
          <span className="chat_time">
            {new Date().toUTCString()}
          </span>
        </p> 
      </div>
      <div className="chat_bottom">
        <InsertEmoticonSharpIcon></InsertEmoticonSharpIcon>
        <AttachFileIcon></AttachFileIcon>
        <form action="">
          <input type="text" name="" id="" placeholder=''/>
          <button  type='submit'>Send a message</button>
        </form>
        <MicIcon></MicIcon>
      </div>
    </div>
  )
}

export default Chat